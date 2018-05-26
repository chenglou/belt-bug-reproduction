'use strict';

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = {
  entry: [resolveApp('src/index.bs.js')],
  output: {
    // The build folder.
    path: resolveApp('build'),
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: '[name].js',
  },
  plugins: [
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin(),
 ],
};
