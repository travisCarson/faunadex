var webpack = require('webpack');
var ip = require('ip').address();

module.exports = {
  entry: [
    'webpack-dev-server/client?http://' + ip + ':8080',
    'webpack/hot/dev-server',
    './client/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/client',
    publicPath: 'http://' + ip + ':8080/',
    filename: 'bundle.js'
  },
  externals: {
    "jquery": "$"
  },
  devServer: {
    contentBase: 'client/',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
