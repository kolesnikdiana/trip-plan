/* eslint-disable object-curly-newline */
import Config from 'webpack-config';

export default new Config().extend('config/webpack.base.config.js').merge({
  output: {
    filename: '[name].js'
  }
});
