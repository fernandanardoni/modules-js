const path = require("path");

module.exports = {
    mode : "development",
    entry : path.resolve(__dirname, "src/index.js"),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "main.js",
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
        ]
      },
} 
