const path = require("path");
const htmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    //entry: './src/index.js',
    // 两个入口 app, print
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    // 默认使用8080端口，
    devServer: {
        // 可访问的文件
       // contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 虽然 ./dist中有html文件，但 htmlWebPackPlugin仍会生成新的index.html
        //并替换掉原来的index.html
        new htmlWebPackPlugin({
            title: "Output Management"
        })
    ],
    output: {
        //filename: 'bundle.js',
        // name 为 入口名
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // 当前模块所在目录，使用resolve拼接路径是因为windows与Linux的表示差异
        // webpack-dev-middleware, express 用到,那publicPath究竟是干什么的, watch 下 不可使用此属性
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css/, // 正则匹配以css结尾的文件
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