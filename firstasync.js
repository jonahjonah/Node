var fs = require('fs');
var arr;

function readF(callback) {
	fs.readFile(process.argv[2], function doneReading(err, fileContents) {
		var str = fileContents.toString();
		//console.log(fileContents.split('\n').length);

		arr = str.split(['\n']);
		console.log(arr.length - 1);
	})
}

function logMyNumber() {
	console.log(arr.length - 1);
}

readF(logMyNumber);