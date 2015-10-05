var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

app.use(express.static(__dirname + "/public"));
app.get('/cafeList', function (req, res) {
	console.log("I recieved a get request");
	person1 = {
    	name: 'AMS1',
    	address: 'Amsterdam 1001',
    	open: 'Yes'
    };
    person2 = {
    	name: 'AMS2',
    	address: 'Amsterdam 2002',
    	open: 'No'
    };
    person3 = {
    	name: 'AMS3',
    	address: 'Amsterdam 3003',
    	open: 'Yes'
    };

    var cafeList = [person1, person2, person3];
    res.json(cafeList);
});

app.listen(port);
console.log('Server running on port: ' + port);