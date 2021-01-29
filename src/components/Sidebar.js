import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import logo from 'assets/images/logo.png';
import router from 'app/router';
import { Link, useLocation } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
// import { logout } from 'features/auth/authSlice';

export default function Sidebar({ setMarginRight }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <>
      <Layout.Sider
        className="sidebar"
        theme="light"
        breakpoint="md"
        collapsible
        collapsed={collapsed}
        onCollapse={(coll) => {
          if (coll) {
            setMarginRight(80)
          } else {setMarginRight(200)}
          setCollapsed(coll)
        }}
      >
        <div className="logo">
          <img src={logo} alt="elastic search" />
        </div>
        <Menu selectedKeys={[location.pathname]} theme="light" mode="inline">
          {router.map((item) => {
            if (item.children?.length) {
              return (
                <Menu.SubMenu
                  key={item.path}
                  title={
                    <span>
                      {item.icon}
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {item.children.map((child) => (
                    <Menu.Item key={child.path} icon={child.icon}>
                      <Link to={child.path}>{child.name}</Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.path} icon={item.icon}>
                  <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
              );
            }
          })}

          <Menu.Item
            key="exit"
            // onClick={() => dispatch(logout())}
            icon={<LogoutOutlined />}
          >
            خروج
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    </>
  );
}
