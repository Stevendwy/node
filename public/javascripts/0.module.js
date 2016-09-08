/**
 * Created by lanouhn on 16/8/31.
 */
/*
 在自己创建模块的时候,一定使用 var 声明变量
 因为如果不使用 var ,那么就是全局变量,这样会导致污染整个项目 js

 支持实时通讯的模块: ws scoket.io
 */
//1++++++++++
//var a = 10;
//console.log(a);
//2-------
var a = 10;
console.log(a);
//设置一个函数
var add = function (n){
    console.log(a+n);
};
//设置一个判断函数
var which = function (m){
    if(m>90){
        console.log("大数据");
    }else {
        console.log("有点小");
    }
};
var randoms = function (m,n){

    console.log(Math.floor(Math.random()*(n-m+1)+m));
};
//建立模块
module.exports = {
    "am":a,
    "myAdd":add,
    "which":which,
    "randoms":randoms
};













