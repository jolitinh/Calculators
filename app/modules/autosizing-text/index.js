let autosizingTextDirective = require('./directives/autosizing-text.directive.js');

module.exports = angular.module('dle.autosizing-text', [])
    .directive('autosizingText', [ autosizingTextDirective ]);
