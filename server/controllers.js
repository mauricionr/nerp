var router = nerp.tools.Router();
var _ = require('underscore');

function BaseController() {
	
};
BaseController.prototype = {
	// Router
	router: nerp.tools.Router(),
	
	init: function(args) {
		this.register_routes();
	},
	
	register_routes: function() {
		/** Virtual method that maps routes to controller methods.
		 * @return void
		 */
		
	}
};

/** Index */

var IndexController = _.extend(BaseController.prototype, {
	index_get: function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.end('Nothing more yet ^^');
	}
});

// Default
router.get('/', IndexController.index_get);

router.register('/');

/** Authentication */

// Register
router
.get('/register', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Register account here');
})
.post('/register', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Validate registration infos');
});

// Login
router
.get('/login', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Login widget here');
})
.post('/login', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Do login stuffs');
});

// Logout
router.post('/logout', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Logout command');
});

router.register('/auth');

/** Configuration */

// Application settings
router.get('/settings', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Config section');
});

// Modules management
router.get('/module/list', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Modules list');
});

router.register('/config');

module.exports = this;