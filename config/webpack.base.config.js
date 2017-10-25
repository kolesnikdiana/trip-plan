import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const path = require('path');

const folders = {
  root: path.join(__dirname, '../'),
  build: path.join(__dirname, '../', 'build/'),
  appDir: path.join(__dirname, '../', 'src/')
};

export default new Config().merge({
  entry: [
    path.join(folders.appDir, 'index.js')
  ],
  output: {
    path: folders.build,
    publicPath: 'js'
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : '',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(folders.root, 'public/', 'index.html'),
      inject: 'body'
    }),
    new ExtractTextPlugin('bundle.css'),
    new CopyWebpackPlugin([
      { from: path.join(folders.root, 'public/', 'favicon.ico'), to: folders.build },
      { from: path.join(folders.root, 'public/', 'manifest.json'), to: folders.build }
    ])
  ],
  devServer: {
    contentBase: folders.build,
    compress: true,
    historyApiFallback: true,
    port: process.env.NODE_ENV === 'development' ? 9000 : 9900
  }
});
