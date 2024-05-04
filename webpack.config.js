const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/Insights.jsx',
  output: {
    filename: 'insights.bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        alias: {
          swr: path.resolve(__dirname, 'node_modules/swr'),
        },
      },
    }),
  ],
};