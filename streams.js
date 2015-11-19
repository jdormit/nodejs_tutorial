var http = require('http');
http.createServer(function(request,response) {
	request.pipe(response);
}).listen(8080);
console.log("streams.js listening on 8080");