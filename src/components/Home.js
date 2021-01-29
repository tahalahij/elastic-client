import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import { Route, Switch, Redirect } from 'react-router-dom';
import router from 'app/router';

export default function Home() {
    const [marginRight, setMarginRight] = useState(200);

    return (
            <>
                <Layout className="layout">
                    <Sidebar setMarginRight={setMarginRight}/>
                    <Layout style={{
                        marginRight
                    }}>
                        <Layout.Content style={{ margin: '16px' }}>
                            <Switch>
                                {router.map((item) => {
                                    if (item.children?.length) {
                                        return item.children.map((child) => (
                                                <Route key={child.path} path={child.path}>
                                                    {child.component}
                                                </Route>
                                        ));
                                    } else {
                                        if (item.sub?.length) {
                                            return [...item.sub, item].map((child) => (
                                                    <Route key={child.path} path={child.path}>
                                                        {child.component}
                                                    </Route>
                                            ));
                                        } else {
                                            return (
                                                    <Route key={item.path} path={item.path}>
                                                        {item.component}
                                                    </Route>
                                            );
                                        }
                                    }
                                })}
                                <Route path="/">
                                    <Redirect to="/dashboard"/>
                                </Route>
                            </Switch>
                        </Layout.Content>
                    </Layout>
                </Layout>
            </>
    );
}
