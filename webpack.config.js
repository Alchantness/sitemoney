const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './jsx/app.jsx',
  output: {
    path: __dirname + '/js/',
    filename: 'bundle.js',
  },
  devtool: '#sourcemap',
  devServer: {
    publicPath: '/js/'
  },
  module: {
    rules: [
      {
      test: /\.jsx?$/,
      use: 'babel-loader',
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }
  ]
  }
}