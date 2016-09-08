/**
 * Created by lanouhn on 16/8/31.
 * 开启 nom cookie install cookie 安装+ -g 全局
  */
//创建一个node服务,创建一个服务,需要引入一个 http 模块
//com 键再鼠标放到目标上 可以点开块
    var http = require("http");//引入一个http 模块

//创建服务
    var server = http.createServer(function(req,res){
    //    req request 传入的参数
    //    res response 返回的数据
        res.setHeader("content-type","text/html;charset=utf-8");
        res.write("写点啥<br/>");
    //    end 方法里面必须传字符串
    //    var arr = [1,2];
    //    res.end(arr);
          res.end("字符串才能干活");

    });

//监听的端口
    server.listen(8080);

//链接成功
    console.log("连接成功");

