// 阻塞代码实例

 // var fs = require('fs')

 // var data = fs.readFileSync('input.txt')

 // console.log(data.toString())

 // console.log("get result!")

 // 非阻塞代码实例

 var fs = require("fs")

 fs.readFile('input.txt', function(err, data) {
 	if (err) return console.log(err)
 	console.log(data.toString())
 })

 console.log("also get result ")