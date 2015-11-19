var fs = require('fs');
var http = require('http');

http.createServer(function(request,response) {
	var copy = fs.createWriteStream("copy_of_" + request);	
	var filebytes = request.headers['content-length'];
	var uploadedBytes = 0;
	
	request.on('readable', function() {
		var chunk = null;
		while (null !== (chunk = request.read())) {
			uploadedBytes += chunk.length;
			var progress = uploadedBytes/filebytes * 100;
			response.write("Progress: " + parseInt(progress,10) + "%\n");
		}
	});
	
	request.pipe(copy);
	request.on('end', function() {
		response.end("upload succesful\n");
	});
}).listen(8080);
console.log("file_upload_progress.js listening on 8080");