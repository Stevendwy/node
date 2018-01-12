// 引入 events 模块
// var events = require('events')

// create eventEmitter 
// var eventEmitter = new events.EventEmitter()

// bind event and program
// eventEmitter.on('eventName', eventHandler)


// 触发事件
// eventEmitter.emit('eventName')

var events = require('events')

var eventEmitter = new events.EventEmitter()

var connectHandler = function connected(){
	console.log('connected')

	eventEmitter.emit('data_received')
}

eventEmitter.on('connection', connectHandler)

eventEmitter.on('data_received',  function() {
	console.log('receive data')
});

eventEmitter.emit('connection')

console.log('over')