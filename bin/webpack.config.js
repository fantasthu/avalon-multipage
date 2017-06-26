'use strict';

const webpack = require("webpack");
const getEntry = require('./getEntry.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//  处理html
var pages = getEntry('./src/*.html');
var compileConfig = require('./compile.config.json');
var alias = require('../alias');

const plugins = [];
for (var chunkname in pages) {
  var conf = {
    filename: chunkname + '.html',
    template: pages[chunkname],
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: false
    },
    chunks: ['vendor', chunkname],
    hash: true,
    complieConfig: compileConfig
  }
  var titleC = compileConfig.title || {};
  var title = titleC[chunkname];
  if (title) {
    conf.title = title;
  }
  plugins.push(new HtmlWebpackPlugin(conf));
}
plugins.push(new webpack.HotModuleReplacementPlugin());
console.log(getEntry('./src/*.js'));
module.exports = {
  entry: getEntry('./src/*.js'),
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
  plugins: plugins,
  resolve: {
    alias: alias,
    extensions: ['.js', '.css', '.scss', '.png', '.jpg']
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: ['raw-loader'],
      exclude: /(node_modules)/
    }, {
      test: /\.js$/,
      loader: ['babel-loader'],
      include: "/src/",
      exclude: "/node_modules/"
    }]
  },
};
