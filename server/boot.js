var http = require('http');
var events = require('events');
var EventEmitter = events.EventEmitter;

var HANDLER_MSG_USER_WELCOME = function(req, res) {
  res.end('No more stuffs yet :-)');
  res.writeHead(200);
};

var server = http.createServer(HANDLER_MSG_USER_WELCOME);

server.listen(8080);

server.on('close', function() {                               
    console.log('[INFO] server shutdown.');
});