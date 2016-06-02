let template = require('./scientific-calculator.tpl.html');

module.exports = function() {
	return {
		restrict: 'E',
		template,
		replace: true,
		scope: true,
		controllerAs: 'ctrl',
		controller: function() {
			let operand1 = 0, operator, calculationMade = false;

			this.calculatorOutput = '0';

			this.appendNumber = ($event) => {
				let valueEntered = $event.currentTarget.value;

				if(valueEntered === '.' && alreadyHasDecimal(this.calculatorOutput.toString())){
					return;
				}

				if(this.calculatorOutput === '0' || calculationMade){
					this.calculatorOutput = valueEntered;
					calculationMade = false;
				} else {
					this.calculatorOutput += valueEntered;
				}
			}

			this.appendOperation = ($event) => {
				let operation = $event.currentTarget.value;

				if(operator !== undefined ){
					this.performCalculation();
				}

				operator = operation;
				operand1 = this.calculatorOutput;
				calculationMade = true;
			}

			this.performCalculation = () => {
				if(operator === undefined) {
					return;
				}

				let calculatedVal = 0;

				calculatedVal = eval(parseFloat(operand1) + operator + this.calculatorOutput);

				if(isNaN(calculatedVal)){
					calculatedVal = 'Error';
				}

				this.calculatorOutput= calculatedVal;
				operand1 = 0;
				operator = undefined;
				calculationMade = true;
			}

			this.invertValue = () => {
				this.calculatorOutput = parseFloat(this.calculatorOutput) * -1;
				calculationMade = true;
			}

			this.squareRoot = () => {
				let calculatedVal = Math.sqrt(parseFloat(this.calculatorOutput));
				this.calculatorOutput= (isNaN(calculatedVal)) ? 'Error' : calculatedVal;
				calculationMade = true;
			}

			this.dividByHundred = () => {
				this.calculatorOutput = parseFloat(this.calculatorOutput) / 100;
				calculationMade = true;
			}

			this.clearEntries = () => {
				this.calculatorOutput = '0';
				operand1 = 0;
				operator = undefined;
			}

			let alreadyHasDecimal = number => !!(number.indexOf('.') > 0);
		}
	}
};