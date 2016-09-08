/**
 * Created by lanouhn on 16/9/1.
 */
var fs = require("fs");

fs.readdir("test1",function(err,file){
    if(err){
        return console.error(err);
    }else{
        console.log(file);
    }
});
//文件详情
fs.stat("test1",function(err,stat){
    if(err){
        return console.error(err);
    }else{
        console.log(stat);
    }
});
//修改文件名
fs.rename("test","test2",function(err){
    console.log("恭喜你");
});