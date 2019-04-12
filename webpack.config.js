const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: ASSET_PATH
  },
  mode: "development",
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(json)$/,
        use: [
          'json-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 5000
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};
