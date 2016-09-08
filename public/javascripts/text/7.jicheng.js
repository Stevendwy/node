/**
 * Created by lanouhn on 16/9/1.
 * 事件:又称为 发布订阅模式 或者:观察者模式,
 * 当主题发生变化时,会通知所有的观察者然后根据变化做出相应
 */

var event  = require("events");

var util = require("util");

//创建一个女孩
function Girl(name){
//    出嫁
    this.name = name;
};
//创建一个男孩
function Boy(name,response){
    this.name = name;
    this.response = response;

};
util.inherits(Girl,event);
util.inherits(Boy,event);
//实例化人物
var xiaoqiao = new Girl('小乔');
var cc = new Boy('曹操',function(){
    console.log("攻打吴国");
    cc.emit("sha");
});
var zhouyu = new Boy('周瑜',function (){
    console.log("火烧赤壁");
});

//绑定事件
xiaoqiao.on("chujia",cc.response);
cc.addListener("sha",zhouyu.response);

//绑定出嫁事件 emit 触发事件理解为执行
xiaoqiao.emit("chujia");



