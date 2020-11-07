const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './js/main.js',
  },
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@models': path.resolve(__dirname, 'src/js/models'),
      '@styles': path.resolve(__dirname, 'src/styles')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};
