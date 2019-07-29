const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'none', // no eval()
  entry: "./src/js/main.js",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
}