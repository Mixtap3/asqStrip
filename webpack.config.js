var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");


var config = {
    devtool: 'hidden-source-map',
    entry: SRC_DIR + "/main.jsx",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        loaders: [
            {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
            },{
            test: /\.json?$/,
            loader: 'json-loader'
            },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({loader: 'css-loader', fallback: 'style-loader'})
            },{
            test: /\.(woff|woff2|eot|ttf|png|jpg|gif)$/, 
            loader: 'url-loader?limit=10000'
            },{
            test: /\.svg$/,
            loader: 'svg-loader?pngScale=2'     
            }
        ]
    },
    resolve: {
        extensions:['.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          jquery: 'jquery'
    }),
        new ExtractTextPlugin("styles.css")
    ]

};

module.exports = config;