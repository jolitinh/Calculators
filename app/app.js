
require('angular');
require("./styles/style.scss");
require('./modules/calculator');


var app = angular.module('Calculators', ['dle.calculator'])
	.controller('MainController', function ($scope) {
    $scope.message = 'asdaaaf';
});

/*
angular.element(document).ready(function() {
  angular.bootstrap(document, ['Calculators']);
});
*/
	
