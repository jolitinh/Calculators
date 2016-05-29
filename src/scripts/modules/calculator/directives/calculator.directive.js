var template = require('./calculator.tpl.html');

module.exports = function(){
	return {
		restrict: 'E',
		template:  template,
		replace: true,
		link: function(scope){
			scope.appendNumber = function($event){
				console.log($event.currentTarget.value);
			}
		}
	};
};