const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

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
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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
