const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // devtool: 'none', // no eval()
  entry: {
    main: "./src/js/main.js",
    vendor: './src/js/vendor/vendor.js'  
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader', // Inject styles into DOM
          'css-loader'    // Turns css into commonjs
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'img'
          }
        }
      }
    ]
  }
}