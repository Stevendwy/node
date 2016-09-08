/**
 * Created by lanouhn on 16/8/31.
 */
var http = require("http");//引入一个http 模块
var url = require("url");

var server = http.createServer(function (req,res){

    res.setHeader("content-type","text/html;charset=utf-8");
    //设置 url 对象 parse 方法格式化返回回来的url
    //理解为解析 url
    //var urlObj = url.parse(req.url);
    var urlObj = url.parse(req.url,true);//添加true 将query 转为对象格式
    console.log(urlObj);
    var querys = urlObj.query;
    console.log(querys.name);
    console.log(querys.age);
    console.log(querys.job);
    res.end("结束");
});
    server.listen(8080);
    console.log("链接成功!");

