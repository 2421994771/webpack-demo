const merge = require('webpack-merge');
const uglifyjs = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const webpack = require('webpack')

module.exports = merge(common, {
    plugins: [
        // 压缩代码， 并使用 sourceMap
        new uglifyjs({
            sourceMap: true
        }),
        // 许多 library 将通过与 process.env.NODE_ENV 环境变量关联，以决定 library 中应该引用哪些内容。
        // 任何位于 /src的本地代码都可以使用 process.env.NODE_ENV
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('production')
        })
    ]
})