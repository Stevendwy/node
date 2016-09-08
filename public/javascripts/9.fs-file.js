/**
 * 读取文件
 * Created by lanouhn on 16/9/1.
 * 引入文件操作模块儿
 */
var fs = require('fs');

//读取文件 异步操作
/*fs.readFile('a.txt','utf-8',function(err,data){
    if(err){
        return console.error(err);
    }
   console.log(data);
});*/

//读取文件 同步  阻塞
    var data = fs.readFileSync("a.txt","utf-8");
    console.log(data);

    console.log("无人知是荔枝来");

