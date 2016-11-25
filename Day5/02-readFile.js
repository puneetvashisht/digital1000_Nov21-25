var fs = require('fs');
/*
//var content = fs.readFileSync('./01-basicServerFile.js');
var content = fs.readFileSync('./noSql');

console.log(typeof content);

console.log("File content is ")
console.log(content.toString())*/


	console.log("Before reading file")
//async
fs.readFile('./01-basicServerFile.js', function(err, data){
	if(err){
		console.log("Some error occurred in file reading")
		console.log(err)
	} else {
		console.log("File data");
		console.log(data.toString());
	}
})
	console.log("After reading file")