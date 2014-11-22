var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Nothing more yet ^^');
});

module.exports = router;