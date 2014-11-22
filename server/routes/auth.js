var express = require('express');
var router = express.Router();

router.post('/register', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Informations about app');
});

router.post('/login', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Informations about app');
});

router.post('/logout', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Informations about app');
});

module.exports = router;