var closeDb = function(){
	console.log("closing db connection")
}

var readDbData = function(callback){
	console.log("open db")
	console.log("read file")
	callback();
}

readDbData(closeDb);