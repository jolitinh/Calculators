var template = require('./calculator.tpl.html');

module.exports = () => ({
	restrict: 'E',
	template,
	replace: true,
	scope: true,
	link: (scope) => {
		scope.operand1 = 0, 
		scope.operand2 = 0, 
		scope.calculatorOutput = '0',
		scope.operator,
		scope.calculationMade = false;

		scope.appendNumber = ($event) => {
			let valueEntered = $event.currentTarget.value;

			if(valueEntered === '.' && alreadyHasDecimal(scope.calculatorOutput)){
				return;
			}

			if(scope.calculatorOutput === '0' || scope.calculationMade){
				scope.calculatorOutput = valueEntered;
				scope.calculationMade = false;
			} else {
				scope.calculatorOutput += valueEntered;
			}
		}

		scope.appendOperation = ($event) => {
			let operation = $event.currentTarget.value;

			if(scope.operator !== undefined ){
				scope.performCalculation();
			}

			scope.operator = operation;
			scope.operand1 = scope.calculatorOutput;
			scope.calculationMade = true;
		}

		scope.performCalculation = () => {
			if(scope.operator === undefined) {
				return;
			};

			let calculatedVal = 0;

			calculatedVal = eval(parseFloat(scope.operand1) + scope.operator + scope.calculatorOutput);

			if(isNaN(calculatedVal)){
				calculatedVal = 'Error';
			}

			scope.calculatorOutput= calculatedVal;
			scope.operand1 = 0;
			scope.operator = undefined;
			scope.calculationMade = true;
		}

		scope.invertValue = () => {
			scope.calculatorOutput = parseFloat(scope.calculatorOutput) * -1;
			scope.calculationMade = true;  //?
		}

		scope.squareRoot = () => {
			let calculatedVal = Math.sqrt(parseFloat(scope.calculatorOutput));
			scope.calculatorOutput= (isNaN(calculatedVal)) ? 'Error' : calculatedVal;
			scope.calculationMade = true;
		}

		scope.dividByHundred = () => {
			scope.calculatorOutput = parseFloat(scope.calculatorOutput) / 100;
			scope.calculationMade = true;
		}

		scope.clearEntries = () => {
			scope.calculatorOutput = '0';
			scope.operand1 = 0;
			scope.operator = undefined;
		}

		let alreadyHasDecimal = number => !!(number.indexOf('.') > 0);
	}
});