let calculatorDirective = require('./directives/calculator.directive.js');

module.exports = angular.module('dle.calculator', [])
	.directive('calculator', [calculatorDirective]);