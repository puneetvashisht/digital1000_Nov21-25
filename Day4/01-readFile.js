//console.log('hello world');

var fs = require('fs');
/*var content = fs.readFileSync('./../Day3/lib/angular.js').toString();

console.log(typeof content)
console.log("File data is : "+ content);*/

//async
fs.readFile('./package.json', function(err, data){
	if(err){
		console.log("Some error " + err)
	} else{
		console.log(data.toString())
	}
})


console.log("After reading file: some task to do")
