var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var config = fs.readFileSync("./config.json").toString();
config = JSON.parse(config)

var port = config.port || 3000;
var host = config.host || "localhost";

console.log(config.port)
var server = express();
server.use(bodyParser.json())
server.use(express.static(__dirname+"/public"))


server.listen(port, host, function(){
	console.log("server is running at "+host+":"+port);
	
	server.get('/login', function(req, res){
		res.send({success: false, message: 'Use post method'});
		
	})
	server.post('/login', function(req, res){
		var isValid = false;
		console.log(req.body);
		var user = req.body;
		if(user.name === user.password){
			isValid = true;
		}
		res.send({success: isValid});
	})
	server.put('/update', function(req, res){
		console.log("update some data in db")
		res.send({success: false, message: 'Using put method'});
	})
})
