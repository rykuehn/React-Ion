//This file configures webpack to run on the production files
const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,
  entry: './src/js/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'js/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
