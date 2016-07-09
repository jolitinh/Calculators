require('./fonts/ProximaNova/ProximaNova.scss');
require('./styles/style.scss');
require('./modules/autosizing-text');
require('./modules/calculator');
require('./modules/scientific-calculator');

angular.module('dle.utilities', ['dle.calculator', 'dle.scientific-calculator', 'dle.autosizing-text']);
