"use strict"

var express = require("express");
var app = express();
var path = require('path');

//set the public static resources folder
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/content"))

/*
app.get("/", function(request, response){
  var index = fs.readFileSync('./index.html');
  response.send(index);
});*/

app.listen(3334);
