const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "main.js",
  },
  plugins: [new HtmlWebpackPlugin({
    title: "@2022",
    template: path.resolve(__dirname, "template.html")
  })],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      }
    ]
  }
}