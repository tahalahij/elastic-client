import React from 'react';
import { Tag } from 'antd';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';

export default function FieldStatus({ status }) {
    if (status) {
        return (
                <Tag className={'wide-tag'} icon={<CheckCircleFilled />} color="green">
                    ایندکس شده
                </Tag>
        );
    }
    return (
            <Tag className={'wide-tag'} icon={<CloseCircleFilled />} color="red">
                ایندکس نشده
            </Tag>
    );
}
