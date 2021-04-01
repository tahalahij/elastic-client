import React, { useContext } from 'react';
import { PageHeader, Card, Button, message, Divider } from 'antd';
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
                    <Divider orientation="right">
                    <Button type="primary" onClick={() => sync()}>  همگام سازی</Button>
                    </Divider>
                    <span> این عملیات به دیتابیس اصلی متصل شده و مدل ها را میگیرد. این عمل  باعث میشود که لیست فیلد های همه مدل ها و نوع ان ها در دیتابیس محلی مونگودیبی اپدیت شود ولی تاثیری در مدل های الستیک ندارد</span>
                </Card>
            </>
    );
}
