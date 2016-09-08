    /**
    * Created by Steven on 16/9/2.
    */
    var  express = require("express");
    var app = express();

    /*
    * 中间件
    * 1 每一个中间件都是控制流程是否执行
    * 2 每一个中间件的req res 都同一个对象
    * 3 如果出错了,就交给错误处理中间件处理
    * 4 中间件处理完成后,都会把数据交给下一个中间件进行处理
    * 5 这是中间件最大的特点
    * */

    //中央
    app.use(function(req,res,next){
        req.money = 1000;
        next();
    });

    //省委
    app.use(function(req,res,next){
        req.money -= 500;
        next();
    });

    //市委
    app.use(function(req,res,next){
        req.money -= 250;
        next();
    });

   /* app.all("*",function(req,res){
        res.send("中央献爱心了"+req.money);
    });*/

    //村委
    app.use(function(req,res,next){
        req.money -= 200;
        next();
    });
    //错误执行
    /*app.use(function(err,req,res,next){
       console.log(err);
        res.send(err);
    });*/

    app.all("*",function(req,res){
       res.send("中央献爱心了"+req.money);
    });

    app.listen(8080);



