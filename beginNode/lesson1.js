var http = require('http')

http.createServer(function (request, response){
	// 发送 http 头部
	// Http 状态值 200 ： ok
	// 内容类型： text/plain
	
	response.writeHead(200, {'Content-Type': 'text/plain'})

	// 发送响应数据 "Hello world"

	response.end('Hello World')
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/')