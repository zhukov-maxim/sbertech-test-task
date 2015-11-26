var path = require('path');

var config = {
  entry: [
    'babel-polyfill',
    './src/js/routes/directories.js',
    './src/js/routes/directory.js',
    './src/js/routes/entry.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dev/js'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = config;
