let template = require('./calculator.tpl.html');
let BigNumber = require('bignumber.js');

module.exports = function() {
  'use strict';

  return {
    restrict: 'E',
    template,
    replace: true,
    scope: true,
    controllerAs: 'ctrl',
    controller: function() {
      let operand1 = 0;
      let operator;
      let calculationMade = false;
      let alreadyHasDecimal = number => number.indexOf('.') > 0;

      this.calculatorOutput = '0';

      this.appendNumber = ($event) => {
        let valueEntered = $event.currentTarget.value;

        if (valueEntered === '.' && alreadyHasDecimal(this.calculatorOutput.toString())) {
          return;
        }

        if (this.calculatorOutput === '0' || calculationMade) {
          this.calculatorOutput = valueEntered;
          calculationMade = false;
        } else {
          if (this.calculatorOutput.toString().length === 14) {
            return;
          }
          this.calculatorOutput += valueEntered;
        }
      };

      this.appendOperation = ($event) => {
        let operation = $event.currentTarget.value;

        if (operator !== undefined && !calculationMade) {
          this.performCalculation();
        }

        operator = operation;
        operand1 = this.calculatorOutput;
        calculationMade = true;
      };

      this.performCalculation = () => {
        if (operator === undefined) {
          return;
        }

        let calculatedVal = 0;
        let x = new BigNumber(parseFloat(operand1));
        let y = new BigNumber(this.calculatorOutput);

        switch (operator) {
          case '+':
            calculatedVal = parseFloat(x.plus(y).valueOf());
            break;
          case '-':
            calculatedVal = parseFloat(x.minus(y).valueOf());
            break;
          case '/':
            calculatedVal = parseFloat(x.dividedBy(y).valueOf());
            break;
          case '*':
            calculatedVal = parseFloat(x.times(y).valueOf());
            break;
        }

        if (isNaN(calculatedVal)) {
          calculatedVal = 'Error';
        }

        this.calculatorOutput = calculatedVal;
        operand1 = 0;
        operator = undefined;
        calculationMade = true;
      };

      this.invertValue = () => {
        this.calculatorOutput = parseFloat(this.calculatorOutput) * -1;
        calculationMade = true;
      };

      this.squareRoot = () => {
        let calculatedVal = Math.sqrt(parseFloat(this.calculatorOutput));

        this.calculatorOutput = (isNaN(calculatedVal)) ? 'Error' : calculatedVal;
        calculationMade = true;
      };

      this.divideByHundred = () => {
        this.calculatorOutput = parseFloat(this.calculatorOutput) / 100;
        calculationMade = true;
      };

      this.clearEntries = () => {
        this.calculatorOutput = '0';
        operand1 = 0;
        operator = undefined;
      };
    }
  };
};
