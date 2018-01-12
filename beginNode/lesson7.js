var util = require('util')

function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('Hello' + this.name)
	}
}

Base.prototype.showName = function(){
	console.log(this.name)
}

function Sub(){
	this.name = 'sub'
}

// sub 继承了Base 在原型中定义的函数
util.inherits(Sub, Base)

var objBase = new Base()

objBase.showName()
objBase.sayHello()

console.log(objBase)

var objSub = new Sub()

objSub.showName()

console.log(objSub)