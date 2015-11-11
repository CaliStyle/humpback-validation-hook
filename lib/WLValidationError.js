'use strict';

module.exports = (function(){
	
	var WLValidationError = require('sails/node_modules/waterline/lib/waterline/error/WLValidationError');
	//reference WLValidationError.toJSON 
	//and WLValidationError.toJSON
	var toJSON = WLValidationError.prototype.toJSON;

	//patch WLValidationError to add `Errors`
	WLValidationError.prototype.toJSON =
	    WLValidationError.prototype.toPOJO = function() {
	        var asJSON = toJSON.call(this);
	        asJSON.Errors = this.Errors;
	        return asJSON;
	    };

	return WLValidationError;
})();
   
