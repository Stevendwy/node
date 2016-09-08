/**
 * 添加文件
 * Created by lanouhn on 16/9/1.
 * 引入文件操作模块儿
 */
var fs = require("fs");

//flag 有两个参数: a 代表追加内容 w 代表覆盖
/*fs.writeFile("a.txt","花落人亡两不知",{flag:"a"},function(){
    var data = fs.readFileSync("a.txt","utf-8");
    console.log(data);
});*/

//追加
 fs.appendFile("a.txt","春色满园关不住","utf-8",function(){
    console.log("一支红杏出墙来");
     fs.readFile("a.txt","utf-8",function(err,data){
         if(err){
             return console.error(err);
         }
         console.log(data);
     });
 });






