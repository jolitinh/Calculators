let template = require('./calculator.tpl.html');

module.exports = () => ({
	restrict: 'E',
	template,
	replace: true,
	scope: true,
	link: (scope) => {
		let operand1 = 0, operator, calculationMade = false;

		scope.calculatorOutput = '0';

		scope.appendNumber = ($event) => {
			let valueEntered = $event.currentTarget.value;

			if(valueEntered === '.' && alreadyHasDecimal(scope.calculatorOutput.toString())){
				return;
			}

			if(scope.calculatorOutput === '0' || calculationMade){
				scope.calculatorOutput = valueEntered;
				calculationMade = false;
			} else {
				scope.calculatorOutput += valueEntered;
			}
		}

		scope.appendOperation = ($event) => {
			let operation = $event.currentTarget.value;

			if(operator !== undefined ){
				scope.performCalculation();
			}

			operator = operation;
			operand1 = scope.calculatorOutput;
			calculationMade = true;
		}

		scope.performCalculation = () => {
			if(operator === undefined) {
				return;
			}

			let calculatedVal = 0;

			calculatedVal = eval(parseFloat(operand1) + operator + scope.calculatorOutput);

			if(isNaN(calculatedVal)){
				calculatedVal = 'Error';
			}

			scope.calculatorOutput = calculatedVal;
			operand1 = 0;
			operator = undefined;
			calculationMade = true;
		}

		scope.invertValue = () => {
			scope.calculatorOutput = parseFloat(scope.calculatorOutput) * -1;
			calculationMade = true;
		}

		scope.squareRoot = () => {
			let calculatedVal = Math.sqrt(parseFloat(scope.calculatorOutput));
			scope.calculatorOutput= (isNaN(calculatedVal)) ? 'Error' : calculatedVal;
			calculationMade = true;
		}

		scope.dividByHundred = () => {
			scope.calculatorOutput = parseFloat(scope.calculatorOutput) / 100;
			calculationMade = true;
		}

		scope.clearEntries = () => {
			scope.calculatorOutput = '0';
			operand1 = 0;
			operator = undefined;
		}

		let alreadyHasDecimal = number => number.indexOf('.') > 0;
	}
});