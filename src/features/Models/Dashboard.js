import React from 'react';
import { Row, Col, PageHeader, DatePicker } from 'antd';
import dayjs from 'dayjs';
import Models from './Models';

export default function Dashboard() {

  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Models />
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        <Col lg={8} md={12} xs={24}>
          {/*<LastSyncAssetJob />*/}
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        <Col lg={8} md={12} xs={24}>
          {/*<SyncAssetJobInfo />*/}
        </Col>
      </Row>
    </>
  );
}
