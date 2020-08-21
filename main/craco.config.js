const CracoLessPlugin = require('craco-less');
const path = require('path');
const resolve = (dir) => path.join(__dirname, '.', dir);

module.exports = {
  webpack: {
    configure: (config) => {
      // webpack config

      return config;
    },
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@ant-prefix': 'my-css-prefix', // 要与 src/index.js 中 <ConfigProvider prefixCls="my-css-prefix"> 配置一致
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
