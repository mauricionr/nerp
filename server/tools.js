var express = require('express');

/** Router */ 
function Router() {
}
Router.prototype = {
	_getz: {},
	_postz: {},
	
	get: function(uri, fn) {
		/** Declare get route.
		 * @params uri: URI.
		 * @params fn: function.
		 * @return Router
		 */
		this._getz[uri] = fn;
		return this;
	},
	post: function(uri, fn) {
		/** Declare post route.
		 * @params uri: URI.
		 * @params fn: function.
		 * @return Router
		 */
		this._postz[uri] = fn;
		return this;
	},
	register: function(root_uri) {
		/** Register routes to application using the optional root URI.
		 * This action flushes all previous registered routes.
		 * @params root_uri (optional): Defines the root URI.
		 * @return Router
		 */
		 
		// Get an express router
		var express_router = express.Router();
		
		// Iteration through both get and post routes
		for(var i in this._getz)
			express_router.get(i, this._getz[i]);
		this._getz = {};
		
		for(var i in this._postz)
			express_router.post(i, this._postz[i]);
		this._postz = {};
		
		// Register them to express
		if(root_uri)
			nerp.app.use(root_uri, express_router);
		else
			nerp.app.use(express_router);
		return this;
	}
}

module.exports = {
	Router: function() {
		return new Router();
	}
};