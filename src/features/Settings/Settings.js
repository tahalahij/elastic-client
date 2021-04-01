import React from 'react';
import { Row, Col, PageHeader, Card, Button, message, Divider } from 'antd';
import api from "../../api/api";

export default function Settings() {
    async function startRabbit() {
        const res = await api.startRabbit()
        if (res) {
            message.success(res)
        }
        console.log('Rabbit  started')
    }

    return (
            <>
                <Row gutter={[32, 32]}>
                    <Col span={24}>
                        <PageHeader title=" تنظیمات"/>
                        <Card title="فعال سازی صف">
                            <Divider orientation="right">
                                <Button type="primary" onClick={() => startRabbit()}> RabbitMQ فعال سازی </Button>
                            </Divider>
                            <span> صف پیام ها                                                                                                                    را فعال میکند که باعث میشود پیام های ارسالی از اپ اصلی دریافت شوند</span>
                        </Card>
                    </Col>
                </Row>
            </>
    );
}
