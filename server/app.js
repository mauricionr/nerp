// Init app
var express = require('express');
var app = express();
var fs = require('fs');

// Init routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/config'));
app.use('/', require('./routes/auth'));

app.listen(8080);