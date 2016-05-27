var template = require('./calculator.tpl.html');

module.exports = function(){
	return {
		restrict: 'E',
		template:  template
	};
};