const path = require('path')

module.exports = {
  mode: 'development',
  // devtool: 'none', // no eval()
  entry: "./src/js/main.js",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader', // Inject styles into DOM
          'css-loader'    // Turns css into commonjs
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }
    ]
  }
}