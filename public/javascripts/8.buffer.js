/**
 * Created by lanouhn on 16/9/1.
 * 数据类型:buffer
 * js 只有字符串数据类型,没有二进制类型
 * buffer 缓存区 暂时放在内存中的数据
 * 是一个数组元素, 每个元素为 8 个字节,用十六进制表示
 * 单位用 16 进制表示 0-255
 */
//创建一个buffer
var buff = new Buffer(3);

//填充 参数一:范围 参数二:起点
buff.fill(101,255);
//用数组方式创建
var buff1 = new Buffer([1,255,0xa4]);

//第三种创建方式
var buff2 = new Buffer("诸葛孔明");

//反向解析
var buff3 = new Buffer([0xe8,0xaf,0xb8,0xe8,0x91]);  //诸葛




//反向解析 连接 buffer 使用 concat 方法,但不是node 建议的方法,太耗内存
var buff4 = new Buffer([0x9b,0xe5,0xad,0x94,0xe6,0x98,0x8e]); //孔明

//node 建议的连接方法 stringDecoder
var StringDecoder = require("string_decoder").StringDecoder;
var decoder = new StringDecoder();

console.log(decoder.write(buff4));
console.log(decoder.write(buff3));



console.log(Buffer.concat([buff3,buff4]).toString());//转译为字符串
console.log(buff3.toString());//转译为字符串
console.log(buff);
console.log(buff1);
console.log(buff2);
