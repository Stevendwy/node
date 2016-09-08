//创建一个node服务,创建一个服务,需要引入一个 http 模块
//com 键再鼠标放到目标上 点开块
var http = require("http");//引入一个http 模块

//创建服务
var server = http.createServer(function(req,res){
    //    req request 传入的参数
    //    res response 返回的数据
    res.setHeader("content-type","text/html;charset=utf-8");
    //res.write("再来写点啥<br/>");

/*
    url: '/',     //路径
    method: 'GET',//传入方式
    shift + ctrl + /  多层注释
 */
    var str = "";
    if(req.url=='/'){
        str = "您访问的是首页";
    }else if(req.url=='/index.html'){
        str = "小桥流水人家";
    }else {
        str = "触发错❌";
    }

    //console.log(req);
    //req 的数据仅仅用 url 及传入方式 method
    res.end(str);

});

//监听的端口
server.listen(8080);

//链接成功
console.log("连接成功");

