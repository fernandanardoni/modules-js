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
      filename : "index.html",
      template : path.resolve(__dirname, "template.html"),
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "build"),
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
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ]
      },
} 
