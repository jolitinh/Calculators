require("./styles/style.scss");

require('angular');

require('./modules/calculator');

//require("!style!css!./sass/blah.css");


var app = angular.module('Calculators', ['dle.calculator'])
	.controller('MainController', function ($scope) {
    $scope.message = 'asdaaaf';
});

/*
angular.element(document).ready(function() {
  angular.bootstrap(document, ['Calculators']);
});
*/
	
