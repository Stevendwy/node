/**
 * Created by lanouhn on 16/9/1.
 * 事件:又称为 发布订阅模式 或者:观察者模式,
 * 当主题发生变化时,会通知所有的观察者然后根据变化做出相应
 */


//    传统写法
//    var event = require("events").EventEmitter;
//    现在写法
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
});
var zhouyu = new Boy('周瑜',function (){
    console.log("火烧赤壁");
});

//最多绑定事件
//xiaoqiao.setMaxListeners(3);


xiaoqiao.on("chujia",cc.response);
//xiaoqiao.on("chujia",zhouyu.response);

cc.addListener("sha",zhouyu.response);
//另一种监听方式
//xiaoqiao.addListener("chujia",zhouyu.response);
//只执行一次
xiaoqiao.once("die",function(){
    console.log("罢兵");
});


//cc.addListener("sha",zhouyu.response);
//移出绑定事件
//xiaoqiao.removeListener('chujia',zhouyu.response);

//移除事件:removeListener 只移除一个事件
//移除所有事件:removeAllListeners 移除所有事件
//xiaoqiao.removeAllListeners("chujia");

//绑定出嫁事件 emit 触发事件理解为执行
xiaoqiao.emit("chujia");
//xiaoqiao.emit("die");
cc.emit("sha");
xiaoqiao.emit("die");
//获取所绑定的事件的相应总数  listenerCount
console.log(xiaoqiao.listenerCount("chujia"));






