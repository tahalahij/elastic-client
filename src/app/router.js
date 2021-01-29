import React from 'react';
import {
  DashboardOutlined,
  // UserOutlined,
  // CommentOutlined,
  // FileOutlined,
  // FilePptOutlined,
  // FundProjectionScreenOutlined,
  // InfoCircleOutlined,
  // SettingOutlined,
  // FieldTimeOutlined,
  // PullRequestOutlined,
  // TransactionOutlined,
} from '@ant-design/icons';
import Dashboard from 'features/Models/Dashboard';


// all routes goes here
export default [
  {
    // name for page title or menu item
    name: ' مدیریت ایندکس ها',
    path: '/Models',
    component: <Dashboard />,
    icon: <DashboardOutlined />,
  },
];
