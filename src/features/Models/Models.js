import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'antd';
import ModelDetail from './ModelDetail';
import api from '../../api/api';
import Context from '../../app/context';

export default function Models() {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState({});
    const { models, setModels} = useContext(Context);


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
                <Card title=" مدل ها">
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
