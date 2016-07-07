module.exports = function() {
  'use strict';

  return {
    restrict: 'A',
    link: function(scope, element) {
      element.css('font-size', '36px');

      element.bind('DOMSubtreeModified',function() {
        console.log('offsetWidth:', this.offsetWidth);
        console.log('scrollWidth', this.scrollWidth);
        var outputField = angular.element(this);

        if (this.scrollWidth > this.offsetWidth) {
          while (this.scrollWidth > this.offsetWidth) {
            var originalFontSize = parseInt(outputField.css('font-size'));

            outputField.css('font-size', originalFontSize - 1 + 'px');
          }
        } else if (this.scrollWidth === this.offsetWidth) {
          outputField.css('font-size', '36px');
        }
      });
    }
  };
};
