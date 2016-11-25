var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var port = 3000;
var host = "localhost";
var colName = 'pollCollection';

var server = express();
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))
server.use(express.static(__dirname+"/public"))


MongoClient.connect("mongodb://localhost:27017/pollsDb", function(err, db){
	if(err){
		console.log(err);
		throw err;
	}
	console.log("connection established");
	
	server.listen(port, host, function(){
		console.log("server is running at "+host+":"+port);

		server.get('/polls', function(req, res){
			db.collection(colName).find({}).toArray(function(err, data){
				if(err){
					res.send({success: false})
				} else {
					res.send({success: true, polls: data})
				}
			})
		})
		server.post('/createPoll', function(req, res){
			var poll = req.body;
			db.collection(colName).insert(poll, function(err){
				if(err){
					res.send({success: false})
				} else{
					console.log("poll inserted");
					res.send({success: true})
				}
			});
		})

	});

});



