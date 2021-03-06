const packageName = require('./package.json').name;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.library = 'app2';
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
