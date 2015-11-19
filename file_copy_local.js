var fs = require('fs');
var file = fs.createReadStream(process.argv[2]);
if (file) {
	var copy = fs.createWriteStream("copy_of_" + process.argv[2]);
	file.pipe(copy);
}
file.on('error', function(error) {
	console.error(error);
});