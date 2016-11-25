var express = require('express');

var server = express();

server.listen(8080, function(){
	console.log("server is running on 8080");
	
	server.get('/hello', function(req, res){
		console.log("request is coming from client");
		res.send({success: true})
	})
})