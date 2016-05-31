let scientificCalculatorDirective = require('./directives/scientific-calculator.directive.js');

module.exports = angular.module('dle.scientific-calculator',[])
	.directive('scientificCalculator', scientificCalculatorDirective)