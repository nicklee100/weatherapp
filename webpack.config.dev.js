import webpack from 'webpack'
import path from 'path'

export default {
  devtool: 'inline-source-map',

  entry: [
    path.resolve(__dirname, 'client/index.js')
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpg|png|svg)$/, use: 'file-loader'}
    ]
  }
}
