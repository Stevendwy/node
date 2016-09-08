/**
 * Created by lanouhn on 16/9/1.
 */
var http = require("http");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable");

var server = http.createServer(function (req,res){
    res.setHeader("content-type","text/html;charset=utf-8");

    var murl = req.url;
    var mmethod = req.method;
    var urlObj = url.parse(murl,true);
    if(urlObj.pathname=="/"||urlObj.pathname=="/post.html"){

        var rs = fs.createReadStream("post.html");
        rs.pipe(res);

    }else if(urlObj.pathname=="/post"){
        var forms = new formidable.IncomingForm();
        forms.parse(req,function(err,fields,files){
        //    fileds 输入的内容
        //    files 提交的文件的信息,可以获取暂存的指定路径
        //    console.log(files);
            var rs = fs.createReadStream(files.file.path);
            var ws = fs.createWriteStream('../images/'+files.file.name);
            rs.pipe(ws);
            res.end(JSON.stringify(fields));
        });


        console.log(urlObj);
    }else{
        res.statusCode = "404";
        res.end("没有找到文件");
    }
    //res.end("可以了");
});
server.listen(8080);
console.log("成功");