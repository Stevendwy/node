// 从流中 read
// var fs = require('fs')

// var data = ''

// var readerStream = fs.createReadStream('input.txt')

// readerStream.setEncoding('UTF8')

// readerStream.on('data', function(chunk){
// 	data += chunk
// })

// readerStream.on('end', function(){
// 	console.log(data)
// })

// readerStream.on('error',function(err){
// 	console.log(err.stack)
// })

// console.log('程序执行完毕')


// 从流中 write

// var fs = require('fs')

// var data = 'owindow.cn'

// var writerStream = fs.createWriteStream('output.txt')
// writerStream.write(data,'UTF8')

// writerStream.end()

// writerStream.on('finish',function(){
// 	console.log('写入完成')
// })

// writerStream.on('error',function(err) {
// 	console.log(err.stack)
// });

// console.log('程序执行完毕')


// 管道流 处理数据

// var fs = require('fs')

// var readerStream = fs.createReadStream('input.txt')

// var writerStream = fs.createWriteStream('output.txt')

// readerStream.pipe(writerStream)

// console.log("程序执行完毕")

