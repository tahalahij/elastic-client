import React, { useEffect, useState } from 'react';
import { Drawer, Button, Row, List, Col, message, Typography, Divider, Card } from 'antd';
import ShortViewHeader from 'components/ShortViewHeader';
import { MediumSquareFilled } from '@ant-design/icons';
import FieldStatus from "./FieldStatus";
import api from "../../api/api";

const { Text } = Typography;
export default function ModelDetail({ setVisible, visible, selected }) {
    const [model, setModel] = useState(selected)
    useEffect(() => {
        setModel(selected)
    }, [selected])

    async function index(field) {
        const res = await api.index(model.modelName, field)
        console.log({ res })
        if (res) {
            message.success('done');
            const { body } = await api.getModelByModelName(model.modelName)
            setModel(body)
        }
    }

    async function deleteIndex() {
        const res = await api.deleteIndex(model.modelName)
        console.log({ res })
        if (res) {
            message.success('deleted');
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
                    />
                    <Card title=" حذف ایندکس">
                        <Divider orientation="right">
                        <Button type="primary" onClick={() => deleteIndex()}> حذف ایندکس</Button>
                        </Divider>
                        <span>
                           حذف ایندکس تمام اطلاعات از ایندکس در الستیک حذف میشود. اطلاعات در مورد اینکه چه فیلدی از هر مدل باید ایندکس شود در دیتابیس محلی باقی می ماند
                      </span>
                    </Card>
                    <Divider direction={"vertical"}/>
                    <List grid={{ column: 1 }}
                          size="large"
                          bordered
                          title={<Text
                                  type="success">{model.modelName} فیلد های مدل </Text>}
                          dataSource={model.fields}
                          renderItem={field =>
                                  <List.Item>
                                      <Row>
                                          <Col span={12}>{field.fieldName}:{field.type}</Col>
                                          <Col span={12}>
                                              {!field.indexed ?
                                                      <Button type="primary"
                                                              onClick={() => index(field.fieldName)}>index</Button>
                                                      :
                                                      <FieldStatus status={field.indexed}/>
                                              }
                                          </Col>
                                      </Row>
                                  </List.Item>}
                    />
                </>
            </Drawer>
    );
}
