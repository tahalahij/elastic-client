import React, { useEffect, useState } from 'react';
import { Drawer, Button, Row, List, Col, message, Typography, Divider, Card, Space } from 'antd';
import ShortViewHeader from 'components/ShortViewHeader';
import { MediumSquareFilled } from '@ant-design/icons';
import FieldStatus from "./FieldStatus";
import api from "../../api/api";

const { Text } = Typography;
export default function ModelDetail({ setVisible, visible, selected }) {

    async function index(field) {
        const res = await api.index(selected.modelName, field)
        console.log({ res })
        if (res) {
            message.success('done');
            console.log({ field })
            console.log('selected.fields', selected.fields)
            const i = selected.fields.findIndex(({ fieldName }) => fieldName===field)
            console.log({ i })
            const newFields = selected.fields
            newFields[i].indexed = true
            selected.fields = newFields
        }
    }

    async function deleteIndex() {
        const res = await api.deleteIndex(selected.modelName)
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
                        <Button type="primary" onClick={() => deleteIndex()}> حذف ایندکس</Button>
                        <span>
                          حذف ایندکس تمام اطلاعات از ایندکس در الستیک حذف میشود
                      </span>
                    </Card>
                    <Divider direction={"vertical"}/>
                    <List grid={{ column: 1 }}
                          size="large"
                          bordered
                          title={<Text
                                  type="success">{selected.modelName} فیلد های مدل </Text>}
                          dataSource={selected.fields}
                          renderItem={field =>
                                  <List.Item>
                                      <Row>
                                          <Col span={12}>{field.fieldName}:{field.value.type}</Col>
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
