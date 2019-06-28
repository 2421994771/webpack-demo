import _ from 'lodash';
import printMe from './print'
import './style.css'; // import 导入模块的 文件名规则和 require 是一样的
import Img  from'./one.jpg';
import Date from './data.xml';
import { cube } from './math.js';
function component() {
    var element =document.createElement('div');

    //Lodash(目前通过一个srcipt脚本引入)对于执行这一行是必须的
    element.innerHTML = _.join(['Hellow', 'webpack'], ' ');
    element.classList.add('hello');
    //将图像添加到现有div
    var myImg = new Image();
    myImg.src = Img;
    element.appendChild(myImg);

    console.log(Date);
    return element;
}

function componentTwo() {
    var element = document.createElement('div');
    var btn = document.createElement("button");
    element.innerHTML = _.join(['Hello','webpack'], ' ');
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;
    element.appendChild(btn);
    // 测试 treeshaking, 简单使用 cube ，无特殊意义
    cube(5);
    return element;
}
//document.body.appendChild(componentTwo());
// 将 componentTwo()赋值给 element ，后面会用到
let element = componentTwo();
document.body.appendChild(element);


//  print.js 发生变更时，通知 webpack 接收更新的模块
if(module.hot) {
    module.hot.accept("./print.js", function() {
        console.log("Accepting the updated printMe moudle!");
        printMe();
        //移除旧元素
        document.body.removeChild(element);
        element = componentTwo(); // 更新click事件处理函数,可见若只是简单的使用HRM，会很麻烦
        document.body.appendChild(element);
    })
}