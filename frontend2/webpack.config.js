const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // entry: { "babel-polyfill": "babel-polyfill", main: "./src/index.js" },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
    // filename: "[name].js"
  },
  module: {
    rules: [
      // {
      //   test: /.tsx?$/,
      //   use: "ts-loader",
      //   exclude: /node_modules/
      // },
      // {
      //   test: /.js$/,
      //   use: "source-map-loader",
      //   exclude: /node_modules/,
      //   enforce: "pre"
      // },
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
  // resolve: {
  //   extensions: [".js", ".json"]
  // },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      // template: "src/index.html"
    })
  ]
};
