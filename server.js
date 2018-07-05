var app = require('./app')
var port = process.env.PORT || 3000;
// app.listen(3000)
// console.log('You are listening to port 3000')
// or use the http server in terminal: node node_modules/http-server/bin/http-server
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
