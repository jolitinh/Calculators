module.exports = function() {
  'use strict';

  return {
    restrict: 'A',
    link: function(scope, element) {
      var initialFontSize = '36px';

      element.css('font-size', initialFontSize);
      element.bind('DOMSubtreeModified',function() {
        var outputField = angular.element(this);

        if (this.scrollWidth > this.offsetWidth) {
          while (this.scrollWidth > this.offsetWidth) {
            var originalFontSize = parseInt(outputField.css('font-size'));

            outputField.css('font-size', originalFontSize - 1 + 'px');
          }
        } else if (this.scrollWidth === this.offsetWidth) {
          outputField.css('font-size', initialFontSize);
        }
      });
    }
  };
};
