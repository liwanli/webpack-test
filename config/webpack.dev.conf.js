const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = webpackMerge(baseConf, {
  entry: path.resolve(__dirname, "../src/index.js" ),
  output: {
    filename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',   //enable srouce map
  plugins:[
  	new HtmlWebpackPlugin({
  		title: 'my webpack test',
  		filename: 'index.html',
  		template: path.resolve(__dirname, "../index.html" )
  	}),
  ],
  devServer:{
  	inline: true,
  	host: "0.0.0.0",
  	port: 9999
  }
});