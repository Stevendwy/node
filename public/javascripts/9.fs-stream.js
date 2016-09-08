/**
 * Created by lanouhn on 16/9/1.
 *
 * stream
 * 流 专门操作大数据
 */
var fs = require("fs");

//可读和可写
//创建一个可读流
var rs = fs.createReadStream("b.jpg");

//创建一个可写流
var ws = fs.createWriteStream("c.jpg");

//复制
/*var timer = 0;
 rs.on("data",function(chunk){
     timer++;
     console.log(timer);
     ws.write(chunk,function(){
        //console.log("创建成功");
     });
 });*/

//创建一个可读流
//var rs = fs.createReadStream("b.jpg");
//创建一个可写流
//var ws = fs.createWriteStream("c.jpg");
//流操作 简单粗暴版 终极
rs.pipr(ws);






