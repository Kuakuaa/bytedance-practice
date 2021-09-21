const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const JSON5 = require('json5');
module.exports = {
  entry: {
    main: "./main.js",
    another: "./another.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
    // v5 的优化
    clean: true
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(png)$/i,
        type: "asset/resource",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./index.html"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'static'),
    },
    compress: true,
    port: 8080,
  },
}