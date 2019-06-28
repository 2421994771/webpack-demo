// server.js 使用 express 构建服务器
// dev-server 则是使用 webpack-dev-server 来构建服务器
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config');

const options = {
    contentBase : './dist',
    hot: true,
    host: 'localhost'
};
// 将 options 添加到 webpack.config.js中，对应 属性名为devServer
webpackDevServer.addDevServerEntrypoints(config, options);
// 启动webpack
const complier = webpack(config);
const server = new webpackDevServer(complier, options);

server.listen(5000, 'localhost', ()=> {
    console.log('dev server listening on port 5000');
})