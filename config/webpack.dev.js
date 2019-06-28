const merge = require('webpack-merge');
const common = requier('./webpack.common.js');

// merge 似乎是，相同属性，数组合并，对象覆盖。
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});
