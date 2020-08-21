const packageName = require('./package.json').name;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.library = 'app1'; // 与主项目 index.js 中 qiankun 注册应用名称保持一致
      config.output.libraryTarget = 'umd';
      config.output.jsonpFunction = `webpackJsonp_${packageName}`;

      return config;
    },
  },
  devServer: (devServerConfig) => {
    devServerConfig.headers = {
      'Access-Control-Allow-Origin': '*',
    };

    return devServerConfig;
  },
};
