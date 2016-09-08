/**
 * Created by lanouhn on 16/8/31.
 */
//引入 util 对象
var util = require("util");
var arr = [1,2,3];

//输出对象
console.log(util.inspect(arr));

//查看数据类型
console.log(util.isArray(arr));

