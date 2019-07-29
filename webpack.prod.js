const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
    filename:'[name].[contentHash].css'
  }),
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['main.*', 'img/*', 'vendor*']
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css into files
          'css-loader'    // Turns css into commonjs
        ]
      },
    ]
  }
})