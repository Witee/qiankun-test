import React, { useState, Suspense } from 'react';
import { Link, Route } from 'react-router-dom';
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import Home from './Home';
import { getPathName } from './lib';

// 注意这里将 CSS 文件改为 less, 因为 antd 要进行全局的 CSS 前缀配置
// ConfigProvider 中 prefixCls 配置: https://ant-design.gitee.io/components/config-provider-cn/#API
import './App.less';

const { Header, Content, Footer } = Layout;

const HEADER_HEIGHT = '64px';
const FOOTER_HEIGHT = '48px';
const CONTENT_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`;

const Loading = <div>Loading...</div>;

function App() {
  const defaultActiveKey = getPathName();

  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  function handleClick({ key }) {
    if (key === 'logout') {
      console.log('logout...');
    }

    setActiveKey(key);
  }

  return (
    <Suspense fallback={Loading}>
      <Layout style={{ height: '100vh', width: '100%' }}>
        <Header style={{ height: HEADER_HEIGHT }}>
          <div className="main-app-logo">{/* logo */}</div>

          <Menu theme="dark" mode="horizontal" onClick={handleClick} selectedKeys={[activeKey]}>
            <Menu.Item key="index">
              <Link to="/">首页</Link>
            </Menu.Item>

            <Menu.Item key="app1">
              <Link to="/app1">APP1</Link>
            </Menu.Item>

            <Menu.Item key="app2">
              <Link to="/app2">APP2</Link>
            </Menu.Item>

            <Menu.SubMenu key="setting" title={<SettingOutlined />} style={{ float: 'right' }}>
              <Menu.ItemGroup title="设置">
                <Menu.Item key="logout">
                  <LogoutOutlined />
                  退出登录
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
          </Menu>
        </Header>

        <Content style={{ height: CONTENT_HEIGHT }}>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/*">
            {/* 子应用挂载处 */}
            <div style={{ height: '100%' }} id="subApp" />
          </Route>
        </Content>
        <Footer
          style={{
            height: FOOTER_HEIGHT,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>Footer</div>
        </Footer>
      </Layout>
    </Suspense>
  );
}

export default App;
