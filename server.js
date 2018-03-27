const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);
const express = require('express');

const app = express();

app.use(dev(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath,
}));

app.use(hot(compiler));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

