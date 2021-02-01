import React, { useContext } from 'react';
import { PageHeader, Card, Button, message, Row } from 'antd';
import api from '../../api/api';
import Context from "../../app/context";

export default function Models() {
    const { setModels } = useContext(Context);

    async function sync() {
        const res = await api.syncModels()
        if (res) {
            message.success('synced')
            const { body } = await api.getModels();
            setModels(body)
        }
        console.log('sync')
    }

    return (
            <>
                <PageHeader title=" مدیریت مدل ها"/>
                <Card title=" همگام سازی مدل ها با دیتابیس ها">
                    <Button type="primary" onClick={() => sync()}> sync</Button>
                    <span> این عملیات به دیتابیس متصل شده و مدل ها را میگیرد. این عمل تنها یکبار باید انجام شود و تکرار
                        ان باعث حذف اطلاعات قبلی میشود ولی تاثیری در مدل های الستیک ندارد</span>
                </Card>
            </>
    );
}
