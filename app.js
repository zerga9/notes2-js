var express = require('express');
var app = express();
var db = require('./db.js')


app.use(express.static('./'));

var NoteController = require('./note-controller.js')
module.exports = app;
