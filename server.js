var express = require('express');
var noteController = require('./note-controller.js');

var app = express();

app.use(express.static('./'));

app.listen(3000)
console.log('You are listening to port 3000')
