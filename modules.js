var mr = require('./make_request');
var http = require('http');

http.createServer().listen(8080);
console.log("listening on 8080");
mr.makeRequest("This is a message");