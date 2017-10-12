/* eslint-disable object-curly-newline */
import webpack from 'webpack';
import Config from 'webpack-config';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default new Config().extend('config/webpack.base.config.js').merge({
  output: {
    filename: 'bundle.min.js'
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ]
});
