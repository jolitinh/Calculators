require('angular');

require('./modules/calculator')

var app = angular.module('Calculators', ['dle.calculator'])
	.controller('MainController', function ($scope) {
    $scope.message = 'asdaaaf';
});

