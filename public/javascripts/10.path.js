/**
 * Created by Yang on 16/9/1.
 * 引入路径模块儿
 */
var path = require("path");

//规范化字符路径 normalize
console.log(path.normalize("a/d/d/ds/1/../dd////d"));

//合并路径的方法:合并字符串让其变为有效路径 join
console.log(path.join("wwwroot",'dd/ss.dd///sd','img/a.jpg','.../abd/../1/ddd'));

console.log(path.normalize(path.join("wwwroot",'dd/ss.dd///sd','img/a.jpg','.../abd/../1/ddd')));

//获取根目录
console.log(path.join(__dirname));

