const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3|wav)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    }),
    new HTMLWebpackPlugin({
      title: 'Cookie Rain',
      filename: 'index.html',
      chunks: ['main'],
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[path][name][ext]',
  },
  devServer: {
    port: 8080,
    hot: true,
  },
};
