var express = require('express');
var app = express();
var fs = require("fs");

var settings = JSON.parse(fs.readFileSync("settings.json"));

console.log(settings);

app.use(function(req, res, next) {
  next();
})

app.use(express.static(__dirname + '/public'));


app.listen(3000);
console.log("listening 3000 (http://localhost:3000/)");

var livereload = require("livereload");
var lrServer = livereload.createServer();
lrServer.watch(__dirname+"/public");