const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
