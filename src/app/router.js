import React from 'react';
import {
    DashboardOutlined,
    SettingOutlined,
    SearchOutlined
} from '@ant-design/icons';
import Dashboard from '../features/Models/Dashboard';
import Settings from '../features/Settings/Settings';
import Search from '../features/Search/Search';


// all routes goes here
export default [
    {
        name: ' جستجو',
        path: '/search',
        component: <Search/>,
        icon: <SearchOutlined/>,
    },
    {
        name: ' مدیریت ایندکس ها',
        path: '/indexes',
        component: <Dashboard/>,
        icon: <DashboardOutlined/>,
    },
    {
        name: ' تنظیمات',
        path: '/settings',
        component: <Settings/>,
        icon: <SettingOutlined/>,
    },
];
