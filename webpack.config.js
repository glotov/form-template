const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    "index.tsx": ["@babel/polyfill", path.resolve(__dirname, "src")]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "static/js/main.js",
    publicPath: '/',
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    compress: true,
    publicPath: '/',
    contentBase: './src',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".ts", '.tsx'],
    alias: {
      'components': path.resolve(__dirname, "src/components"),
      'ui': path.resolve(__dirname, "src/ui"),
      'utils': path.resolve(__dirname, "src/utils"),
    }
  },
  module: {
    rules: [
      {
          test: /\.(tsx|ts)?$/,
          use: [
            {
              loader: 'ts-loader',
            }
          ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ]
      },
    ]
  }
};
