import React, { useEffect, useState } from 'react';
import { PageHeader, Card } from 'antd';
import ModelDetail from './ModelDetail';
import api from '../../api/models';

export default function Models() {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState({});
    const [models, setModels] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const { body } = await api.getModels();
            setModels(body)
        }

        fetchData();
    }, [])

    function CardList({ data }) {
        if (data) {
            return (data.map((model) => {
                        return <Card.Grid className={'gridStyle'} key={model.modelName} onClick={() => {
                            setSelected(model);
                            setVisible(true);
                        }}> {model.modelName} </Card.Grid>
                    }
            ))
        }
    }

    return (
            <>
                <PageHeader title=" ایندکس ها"/>
                <Card title="indexes">
                    <CardList data={models}/>
                </Card>,

                <ModelDetail
                        visible={visible}
                        setVisible={setVisible}
                        selected={selected}
                />
            </>
    );
}
