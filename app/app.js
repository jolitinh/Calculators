
require('angular');
require("./styles/style.scss");
require('./modules/calculator');
require('./modules/scientific-calculator');

angular.module('dle.utilities', ['dle.calculator', 'dle.scientific-calculator']);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['dle.utilities']);
});