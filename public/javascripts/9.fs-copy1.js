/**
 * Created by lanouhn on 16/9/1.
 * 引入fs模块
 */
var fs = require("fs");

//创建目录
fs.mkdir("test",0777,function(err){
    if(err){
        return console.error(err);
    }
    console.log("创建成功");
});
/*
*0777含义
* 0 不用操作
* 第一个位置代表 本用户
* 第二个位置代表 组用户
* 第三个位置代表 所有用户
*1:执行权限
*2:写入权限
*3:读取权限
 *  */