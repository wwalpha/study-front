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
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
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
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: path.resolve(__dirname, "./node_modules/source-map-loader")
    //   }
    // ],
  },
}
