const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js',
  },
  output: {
    filename: '_build/bundle.js',
  },
};
