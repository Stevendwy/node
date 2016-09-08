/**
 * Created by lanouhn on 16/9/2.
 * mongoose : 对象模型工具,是针对mongodb node.js 的驱动
 *
 */
//引入 mongoose 默认连接数据库 的是 test
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var db = mongoose.connect("mongodb://127.0.0.1/person");

//错误连接
db.connection.on("error",function(error){
    console.log("连接数据库失败"+error);
});

//成功连接
db.connection.on("open",function(){
    console.log("连接成功");
});
//Schema 存储内容为文件类型的 数据库模型框架
var MySchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number,default:0}
},{
    collection:"test"
});

//创建模板 model
var Model = db.model("test",MySchema);
/*
var myDoc = new Model({
    name:"孙大圣",
    age:9
});
myDoc.save(function(err,doc){
    console.log(doc);
});
*/
/*Model.create([
        {firstName:"王",lastName:"昭君"},
        {firstName:"西",lastName:"施"},
        {firstName:"貂",lastName:"蝉"},
        {firstName:"杨",lastName:"玉环"}],
    function(err,doc){
        console.log(doc);
});*/
//更新
Model.update({name:"孙大圣"},{$set:{name:"唐僧"}},function(err,doc){
    console.log(doc);
});
//查询 find

/*Model.find(function(err,doc){
    console.log(doc);
});*/

//查询 find 属性名
/*Model.find({name:"刘大哥"},function(err,doc){
    console.log(doc);
});*/

//删除 删除一条数据
/*
Model.remove({name:"唐僧"},function(err,doc){
    console.log(doc);
});
*/

//条件查询
/*Model.find({age:{$gt:80}},function(err,doc){
    console.log(doc);
});*/
//升降序 sort 值 正负 1
/*
Model.find({name:"刘大哥"},function(err,doc){
    console.log(doc);
}).sort({age:1});

Model.find(function(err,doc){
    console.log(doc);
}).sort({age:-1});
*/

Model.find({age:{$eq:92}},function(err,doc){
    console.log(doc);
});







