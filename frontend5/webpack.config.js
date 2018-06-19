const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.js$/,
        use: "es3ify-loader",
        enforce: "post"
      }
    ]
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
