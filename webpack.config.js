var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'app', 'js', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel?stage=0&optional=runtime'
    }]
  }
}
