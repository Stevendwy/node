/**
 * Created by lanouhn on 16/8/31.
 //*/
/* 引入工具模块儿
util 三个功能
    1.继承
    2.输出对象
    3.查看类型
* */
//引入 util 模块儿
var util = require("util");

//设置构造函数
function Parent(name){
    this.name = "刘备";
    this.act = function (){
        console.log("卖草鞋");
    }
};
Parent.prototype.dream = function (){
    console.log("三锅粥");
};
//继承只能继承原型的方法
function  Son(name){
    //继承原型的方法
    Parent.call(this,name);
    //this.name = "刘阿斗";
};
//继承
util.inherits(Son,Parent);

var liubei = new Parent("刘备");
var liushan = new Son("刘禅");

liushan.dream();

liushan.act();

