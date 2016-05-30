let operand1 = 0, 
	operand2 = 0, 
	operator, 
	calculationMade = false;

let appendOperation = (operation) => {
	if(operator !== undefined ){
		performCalculation();
	}

	operator = operation;
	operand1 = Calculator.calcValue.value;
	calculationMade = true;
}

let appendNumber = (number) => {
	let currentVal = Calculator.calcValue.value;

	if(number ==='.' && currentVal.indexOf('.') > 0){
		return;
	}

	if(currentVal === '0' || calculationMade){
		Calculator.calcValue.value = number;
		calculationMade = false;
	} else {
		Calculator.calcValue.value += number;
	}
}

let clearEntries = () => {
	Calculator.calcValue.value = '0';
	operand1 = 0;
	operator = undefined;
}

let performCalculation = () => {
	let calculatedVal = 0;
	if(operator !== undefined){
		calculatedVal = eval(parseFloat(operand1) + operator + Calculator.calcValue.value);
		if(isNaN(calculatedVal)){
			calculatedVal = 'Error';
		}
		Calculator.calcValue.value = calculatedVal;
		operand1 = 0;
		operator = undefined;
		calculationMade = true;
	}
}

let invertValue = () => {
	Calculator.calcValue.value = parseFloat(Calculator.calcValue.value) * -1;
	calculationMade = true;
}

let dividByHundred = () => {
	Calculator.calcValue.value = parseFloat(Calculator.calcValue.value) / 100;
	calculationMade = true;
}

let squareRoot = () => {
	let calculatedVal = Math.sqrt(parseFloat(Calculator.calcValue.value));
	Calculator.calcValue.value = (isNaN(calculatedVal)) ? 'Error' : calculatedVal;
	calculationMade = true;
}