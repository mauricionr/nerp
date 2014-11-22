var express = require('express');
var router = express.Router();

router.get('/config', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Config section');
});

module.exports = router;