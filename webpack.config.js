// Created on https://webpack.jakoblind.no/
const webpack = require("webpack");
const path = require("path");
var DashboardPlugin = require("webpack-dashboard/plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [new DashboardPlugin()]
};

module.exports = config;
