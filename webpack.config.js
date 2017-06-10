module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader'
      }
    ]
  }
}
