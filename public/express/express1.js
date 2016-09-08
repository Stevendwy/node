    /**
     * Created by Steven on 16/9/2.
     * 引入模块儿
     */

    var express = require("express");

    var app = express();

    //设置路由

    //get 第一个参数:返回 url ,类似  url模块儿 pathname
    app.get("/",function(req,res){
        res.sendFile(__dirname+"/express.html");//发送文件
    });

    //query 指的是:req当中的 query 属性
     app.get("/renyi",function(req,res){
         console.log(req);
         res.send(req.hostname);
     });

    app.post("/post",function(req,res){
        res.send(req.url);
    });

    app.get("/article/:id/:name",function(req,res){
       res.send(req.params);
    });
    //设置所有 没有对 uil 进行设置的场景
    app.all("*",function(req,res){
        res.send("那一夜,我读遍所有经文");
    });

    app.listen(8080);


