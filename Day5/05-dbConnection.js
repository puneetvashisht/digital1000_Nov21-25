var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;


var port = 3000;
var host = "localhost";
var colName = 'UserCollection';

var server = express();

server.use(bodyParser.json())
server.use(express.static(__dirname+"/public"))

MongoClient.connect("mongodb://localhost:27017/test2", function(err, db){
	if(err){
		console.log(err);
		throw err;
	}
	console.log("connection established");
	//db
	
	
	console.log("Run node server after db is ready")
	server.listen(port, function(){
		server.post('/user', function(req, res){
			var user = req.body;
			db.collection(colName).insert(user, function(err){
				if(err){
					res.send({inserted: false})
				} else{
					console.log("user inserted");
					res.send({inserted: true})
				}
			});
		})
		
		server.get('/user', function(req, res){
			var user = req.body;
			db.collection(colName).find().toArray(function(err, data){
				if(err)
					throw err;
				
				res.send({users: data})
			})
		})
	})
	
})
