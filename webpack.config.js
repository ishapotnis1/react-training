/*
* @Author: Isha Potnis
* @Date:   2017-07-04 14:41:50
* @Last Modified by:   Isha Potnis
* @Last Modified time: 2017-07-04 17:10:49
*/

var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react" , "es2015", "stage-2"]
				}
			}
		]			
	}
};

module.exports = config;