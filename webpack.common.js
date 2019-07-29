const path = require('path')

module.exports = {
  // devtool: 'none', // no eval()
  entry: {
    main: "./src/js/main.js",
    vendor: './src/js/vendor/vendor.js'  
  },
  module: {
    rules: [{
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img'
          }
        }
      }
    ]
  }
}