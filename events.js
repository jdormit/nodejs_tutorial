var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter;
logger.on('error', function(message) {
	console.log("ERROR:" + message)
});
var http = require('http');
http.createServer(function (request,response) {
	response.writeHead(200);
	logger.emit('error','This is an error!');
	response.end();
}).listen(8080);
console.log("Server listening on 8080");