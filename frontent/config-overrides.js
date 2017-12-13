/*
 * @Author: lidongjies@gmail.com 
 * @Date: 2017-12-13 18:55:04 
 * @Last Modified by:   lidongjies@gmail.com 
 * @Last Modified time: 2017-12-13 18:55:04 
 */
/* eslint-disable */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['transform-decorators-legacy', ['import', { libraryName: 'antd', style: true }]],
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1DA57A' }
  })(config, env);
  return config;
};
