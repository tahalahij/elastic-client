import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import urljoin from 'url-join';
import { loadState } from 'utils/localStorage';
import config from 'config';
import { useSelector } from 'react-redux';

function Uploader({ prefix, entityName, onChange, label, value, defVal, ...props }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(defVal);
  const { token } = useSelector((state) => state.auth);
  const { value: apiBaseUrl } = loadState('apiUrl') || config.apiUrls[0];

  let uploadUrl;
  if (entityName) {
    uploadUrl = urljoin(apiBaseUrl, 'upload', entityName);
  }

  if (prefix) {
    uploadUrl = urljoin(uploadUrl, prefix);
  }

  function handleChange(info) {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setImageUrl(info.file.response.url);

      setLoading(false);

      if (onChange) {
        onChange(info.file.response.url);
      }
    }
  }

  function beforeUpload(file) {
    const validFileTypes = [
      'image/jpeg',
      'image/png',
      'image/jpg',
      'image/gif',
    ].includes(file.type);

    if (!validFileTypes) {
      message.error('File type is not valid');
    }
    const validSize = file.size / 1024 / 1024 < 1;
    if (!validSize) {
      message.error('Image must smaller than 1MB!');
    }
    return validFileTypes && validFileTypes;
  }

  return (
    <Upload
      className="uploader"
      name="image"
      listType="picture-card"
      showUploadList={false}
      headers={{
        'blog-admin': token,
      }}
      action={uploadUrl}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl || value ? (
        <img src={imageUrl || value} alt="avatar" style={{ width: '100%' }} />
      ) : (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div className="ant-upload-text">{label}</div>
        </div>
      )}
    </Upload>
  );
}

export default Uploader;
