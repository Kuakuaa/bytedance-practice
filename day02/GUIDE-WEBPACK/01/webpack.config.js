const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    })
  ],
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'static'),
  //   },
  //   compress: true,
  //   port: 9000,
  // },
}