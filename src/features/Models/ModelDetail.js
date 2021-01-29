import React, { useEffect, useState } from 'react';
import { Drawer, Button, Row, List, Badge, Col, message } from 'antd';
import ShortViewHeader from 'components/ShortViewHeader';
import { MediumSquareFilled } from '@ant-design/icons';
import FieldStatus from "./FieldStatus";
import api from "../../api/models";

export default function ModelDetail({ setVisible, visible, selected }) {
    useEffect(() => {

    }, [selected]);

    async function index(field) {
        const res = await api.index(selected.modelName, field)
        console.log({ res })
        if (res) {
            message.success('done');
        }
    }

    return (
            <Drawer
                    width={576}
                    placement="left"
                    closable={false}
                    onClose={() => setVisible(false)}
                    visible={visible}
            >
                <>

                    <ShortViewHeader
                            icon={
                                <MediumSquareFilled/>
                            }
                            title={<Badge.Ribbon text={selected.modelName}/>}
                    />
                    <List
                            size="large"
                            header={<div className={'ant-card-hoverable'}> Model fields</div>}
                            bordered
                            dataSource={selected.fields}
                            renderItem={field =>
                                    <List.Item>{field.fieldName} =>
                                        <Row>
                                            <Col span={8}>{field.value.type}</Col>
                                            <Col span={8}> <FieldStatus status={field.indexed}/></Col>
                                            <Col span={8}> <Button type="primary" visible={(!field.indexed).toString()}
                                                                   onClick={() => index(field.fieldName)}>index</Button></Col>
                                        </Row>
                                    </List.Item>}
                    />
                </>
            </Drawer>
    );
}
