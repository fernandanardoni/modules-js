const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : "development",
    entry : path.resolve(__dirname, "src/index.js"),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "main.js",
  },

  plugins : [
    new HtmlWebpackPlugin({
      title : "App",
      filename : "app.html",
      template : path.resolve(__dirname, "template.html"),
    })
  ],
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
        ]
      },
} 
