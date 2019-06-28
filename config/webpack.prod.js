const merge = require('webpack-merge');
const uglifyjs = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    plugins: [
        new uglifyjs()
    ]
})