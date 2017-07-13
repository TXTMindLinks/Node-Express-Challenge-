var express = require('express');
var path = require('path'); //module object which returns the string of the location

var app = express(); // this initialize an express object 
app.use(express.static(__dirname));


var port = 8080;
console.log("Server now listening on: " + port);
app.listen(port)