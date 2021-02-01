import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Models from './Models';
import SyncModels from './SyncModels';
import context from "../../app/context";

export default function Dashboard() {
    const [models, setModels] = useState([])
    return (
            <>

                <context.Provider value={{ models, setModels }}>
                    <Row gutter={[32, 32]}>
                        <Col span={24}>
                            <SyncModels/>
                        </Col>
                    </Row>
                    <Row gutter={[32, 32]}>
                        <Col span={24}>
                            <Models/>
                        </Col>
                    </Row>
                </context.Provider>
            </>
    );
}
