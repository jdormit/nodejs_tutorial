var http = require("http");

http.createServer(function(request, response) {
	
	response.writeHead(200);
	
	response.write("Booh Yah Baby\n");
	setTimeout(function(){
		response.write("done running!");
		response.end();
	},5000);
	response.write("I'm running during the timeout!\n");

	
}).listen(8080);

console.log("Server running at http://127.0.0.1:8080/");