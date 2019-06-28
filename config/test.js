const path = require('path');
var root1 = path.resolve(__dirname, 'dist');
var root2 = path.resolve(__dirname, '/dist');
var root3 = path.resolve(__dirname, './dist');
var root4 = path.resolve(__dirname, '../dist');
var root5 = path.resolve();
console.log(__dirname); // d:/vswork/webpack-demo/config

console.log(__filename); // d:/vswork/webpack-demo/config/test.js

console.log(root1) // d:/vswork/webpack-demo/config/dist

console.log(root2) // d:/dist

console.log(root3) // d:/vswork/webpack-demo/config/dist

console.log(root4) // d:/vswork/webpack-demo/dist

console.log(root5) // d:/vswork/webpack-demo
// 明白了， 解析出一个绝对路径(划重点)， 盘符默认为当前盘。 . ..都是相对路径的写法，所以会往左处理参数，而 /dist + 盘符 已经可以构成一个绝对路径，所以函数返回此路径。

