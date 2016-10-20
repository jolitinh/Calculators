require('./../autosizing-text');

let calculatorDirective = require('./directives/calculator.directive.js');

module.exports = angular.module('dle.calculator', [ 'dle.autosizing-text' ])
	.directive('calculator', [ calculatorDirective ]);
