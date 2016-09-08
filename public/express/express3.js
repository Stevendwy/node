/**
 * Created by lanouhn on 16/9/2.
 */
//模板引擎
var express = require("express");
var app = express();
var ejs = require("ejs");

//指定渲染引擎
app.set("view engine","ejs");

//设置模板的存放目录
app.set("views",__dirname);

//显示模板
app.get('/',function(req,res){
    //模板的后缀名必须为 ejs
    res.render("muban",{
        name:"龙龙",
        age:17
    });
});
app.listen(8080);
