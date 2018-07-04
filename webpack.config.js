const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        polyfill: './src/polyfill.js',
        index: './src/app.js'
    },
    output: {
        filename: "[name].app.js",
        path: path.resolve(__dirname, 'dist')
    }
};