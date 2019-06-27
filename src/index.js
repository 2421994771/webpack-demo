import _ from 'lodash';
import printMe from './print'
import './style.css'; // import 导入模块的 文件名规则和 require 是一样的
import Img  from'./one.jpg';
import Date from './data.xml'
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
    return element;
}
document.body.appendChild(componentTwo());