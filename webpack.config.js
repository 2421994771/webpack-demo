const path = require("path");
const htmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    //entry: './src/index.js',
    // 两个入口 app, print
    entry: {
        app: './src/index.js',
      //  print: './src/print.js' ，启用HMR 注释，因为 print.js 被 index.js使用
        another: './src/another-module.js'
    },
    devtool: 'inline-source-map',
    // 默认使用8080端口，
    devServer: {
        // 可访问的文件
        contentBase: './dist',
        //启用HMR
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 虽然 ./dist中有html文件，但 htmlWebPackPlugin仍会生成新的index.html
        //并替换掉原来的index.html
        new htmlWebPackPlugin({
            title: "Output Management"
        }),
        // 启用HRM时添加
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        /**  已被废弃 optimization 以作为一个配置属性
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共bundle的名称
        })
        */
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common'
        }
    },
    output: {
        //filename: 'bundle.js',
        // name 为 入口名
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // 当前模块所在目录，使用resolve拼接路径是因为windows与Linux的表示差异
        // webpack-dev-middleware, express 用到,那publicPath究竟是干什么的, watch 下 不可使用此属性
        //publicPath: '/'
    },
    // 不设置这个值，默认是 production, production模式下会压缩代码。,此属性 webpack4支持
    //mode: 'development',
    module: {
        rules: [
            {
                test: /\.css/, // 正则匹配以css结尾的文件
                // 很多 loader都会使用 moudule.hot.accpet来同步更改模块，如下面的 style-loader,cssloader，还有vue-loader等
                // 我们只需启用HRM，修改css文件后，页面也会同步更改
                use: [ // 配置使用的loader
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};