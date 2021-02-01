import React, { useState } from 'react';
import { Row, Col, Card, Form, Input, Typography } from 'antd';
import api from '../../api/api';

const { Text } = Typography
export default function Search() {
    const [results, setResults] = useState([]);
    const [index, setIndex] = useState('');
    const [query, setQuery] = useState('');

    async function searchElastic({ i, q }) {
        const ii = i ? i:index;
        const qq = q ? q:query;
        console.log({ ii, qq })
        if (ii && qq) {
            const data = await api.search(ii, qq)
            console.log({ data })
            setResults(data)
        }
    }

    const indexChange = (e) => {
        setIndex(e.target.value)
        searchElastic({ i: e.target.value })
    }
    const queryChange = (e) => {
        setQuery(e.target.value)
        searchElastic({ q: e.target.value })
    }

    function CardList({ data }) {
        console.log('cardlist data, ', data)
        if (data) {
            return (data.map((record) => {
                        return (<Card.Grid className={'gridStyle blue'} key={record._id}>
                            {Object.keys(record._source).map((k) => {
                                return <Text className={"spanObj"} color="white"> {k}: {record._source[k]}</Text>
                            })}
                        </Card.Grid>)
                    }
            ))
        } else {
            return <span> No result ... !</span>
        }
    }

    return (
            <>
                <Row gutter={[32, 32]}>
                    <Col span={24}>
                        <Card title="Search">
                            <Form name="search">
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                                name="index"
                                                className="debug-form-item"
                                        >
                                            <Input allowClear size="large" placeholder="Enter index name"
                                                   onChange={indexChange}/>
                                        </Form.Item>
                                    </Col>
                                    {index && <Col span={12}>
                                        <Form.Item
                                                name="phrase"
                                                className="debug-form-item"
                                        >
                                            <Input allowClear size="large" placeholder="Enter query"
                                                   onChange={queryChange}/>
                                        </Form.Item>
                                    </Col>}
                                </Row>
                            </Form>

                        </Card>,
                    </Col>
                </Row>
                {index && query &&
                <Row gutter={[32, 32]}>
                    <Col span={24}>
                        <Card title="Results">
                            <CardList data={results}/>
                        </Card>,
                    </Col>
                </Row>
                }
            </>
    );
}
