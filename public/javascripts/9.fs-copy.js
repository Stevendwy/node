/**
 * 复制文件
 * 复制文件的时候,注意文件格式,图片等 去掉utf-8
 * Created by lanouhn on 16/9/1.
 */
var fs = require("fs");


var data = fs.readFileSync("a.txt","utf-8");
console.log(data);
fs.appendFile("a.txt",data,"utf-8",function(){
    fs.readFile("a.txt","utf-8",function(err,data){
        if(err){
            return console.log(err);
        }
        console.log(data);
    })
});

//封装的拷贝函数
function  copy(a,b){
    fs.readFile(a,function(err,data){
        fs.writeFile(b,data,function(){
            console.log("复制成功");
        })
    })
}
copy("bg_bao2.jpg","b.jpg");
