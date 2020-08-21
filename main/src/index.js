import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import App from './App';

// 注意这里将 CSS 文件改为 less, 因为 antd 要进行全局的 CSS 前缀配置
// ConfigProvider 中 prefixCls 配置: https://ant-design.gitee.io/components/config-provider-cn/#API
import './index.less';

const apps = [
  {
    name: 'app1', // 与子项目 webpack output.library 保持一致
    entry: '//localhost:4001',
    container: '#subApp',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry: '//localhost:4002',
    container: '#subApp',
    activeRule: '/app2',
  },
];

/**
 * 切换应用时显示 loading
 *
 * 官方推荐在每个 app 中 `loader` 参数中处理, 但会引起 react 报错
 * 详细的讨论在这里: https://github.com/umijs/qiankun/issues/881
 *
 * @author Witee <github.com/Witee>
 * @date 2020-08-21
 */
const lifeCycles = {
  beforeLoad: () => {
    ReactDOM.render(
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: '20px',
          marginTop: '40px',
        }}
      >
        <h1>Loading...</h1>
      </div>,
      document.getElementById('subApp')
    );
  },
};

registerMicroApps(apps, lifeCycles);

/**
 * 启动 qiankun
 *
 * 1. prefetch: 同时加载所有 app 的静态资源
 * 2. sandbox: 沙箱默认启动, 并未使用其它参数, 如 strictStyleIsolation|experimentalStyleIsolation
 *
 * @author Witee <github.com/Witee>
 * @date 2020-08-21
 */
start({ prefetch: 'all' });

ReactDOM.render(
  <BrowserRouter>
    {/* prefixCls: 增加 css 前缀, 防止污染子应用; 要与 craco.config.js 中 lessLoader 的 modifyVars 配置一致 */}
    <ConfigProvider prefixCls="my-css-prefix">
      <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById('mainApp')
);
