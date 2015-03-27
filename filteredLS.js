var path = require('path');
var fs = require('fs');

var arr;
var ext = '.' + process.argv[3];
//console.log(ext);

function readD (callback) {
	fs.readdir(process.argv[2], function doneReading (err, list){
		//console.log(list);
		var count = 0;
		for (i=0; i < list.length; i++){
			if (path.extname(list[i]) == ext){
				console.log(list[i]);
			}
		}
	})
}

readD();
