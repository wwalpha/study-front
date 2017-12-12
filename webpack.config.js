var path = require('path');

module.exports = {
  devtool: "source-map",
  context: __dirname + "/src",
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: 'build',
    port: 3000
  },
  resolve: {
    alias: {
      root: path.resolve(__dirname, 'src/'),
      styles: path.resolve(__dirname, 'styles/'),
      calc: path.resolve(__dirname, 'src/components/calc/')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["eslint-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
      }
    ],
  },
}
