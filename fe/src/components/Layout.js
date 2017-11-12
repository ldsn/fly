import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
const Layout1 = (props) => {
  return (
    <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">配置</Menu.Item>
            <Menu.Item key="2">页面</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', minHeight: 'calc(100vh - 130px)' }}>
        {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Fly ©2017 鲁大学生网版权所有
        </Footer>
      </Layout>
  );
};


export default Layout1;
