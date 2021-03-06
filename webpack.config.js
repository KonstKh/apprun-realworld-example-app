const path = require('path');
module.exports = {
  entry: {
    'app': './src/main.ts',
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devtool:'source-map',
  devServer: {
  }
}