// Initialize base requirements
var express = require('express');
var fs = require('fs');

// Define main module
global.nerp = {
	// Define reference for current nerp instance
	app: express(),
	// Set current directory as root server directory
	__server_base: __dirname + '/',
};

// Default modules
nerp.tools = require('./tools');
nerp.models = require('./models');
nerp.controllers = require('./controllers');

// Server start
nerp.app.listen(8888);