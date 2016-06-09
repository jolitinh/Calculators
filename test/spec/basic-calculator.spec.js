describe('A basic calculator', () => {
  var calculatorElement, controller;

  var createMockEvent = (value) => ({
    currentTarget: {value}
  });

  beforeEach(module('dle.calculator'));
  beforeEach(inject(($rootScope, $compile) => {
    var scope = $rootScope.$new();
    var calculatorElement = angular.element('<calculator></calculator>');

    $compile(calculatorElement)(scope);
    scope.$digest();

    controller = calculatorElement.controller('calculator');
  }));

  it('gets initialized with a value of 0', function() {
    expect(controller.calculatorOutput).toBe('0');
  });

  describe('$scope.appendNumber appends to the output (display) string', () => {
    it('dipslays the entered value', () => {
      controller.appendNumber(createMockEvent('5'));
      expect(controller.calculatorOutput).toBe('5');

      controller.appendNumber(createMockEvent('6'));
      expect(controller.calculatorOutput).toBe('56');

      controller.appendNumber(createMockEvent('8'));
      expect(controller.calculatorOutput).toBe('568');

      controller.appendNumber(createMockEvent('.'));
      expect(controller.calculatorOutput).toBe('568.');

      controller.appendNumber(createMockEvent('4'));
      expect(controller.calculatorOutput).toBe('568.4');
    });

    it('does nothing to the output if a second decimal is entered', () => {
      controller.appendNumber(createMockEvent('4'));
      expect(controller.calculatorOutput).toBe('4');

      controller.appendNumber(createMockEvent('.'));
      expect(controller.calculatorOutput).toBe('4.');

      controller.appendNumber(createMockEvent('2'));
      expect(controller.calculatorOutput).toBe('4.2');

      controller.appendNumber(createMockEvent('.'));
      expect(controller.calculatorOutput).toBe('4.2');
    })
  });

  describe('$scope.performCalculation', () => {
    it('does nothing when an operator hasn\'t been specified', () => {
      controller.calculatorOutput = '4';

      controller.performCalculation();
      expect(controller.calculatorOutput).toBe('4');
    });

    it('sets output to "Infinity" when dividing by 0', () => {
      controller.calculatorOutput = '5';
      controller.appendOperation(createMockEvent('/'));
      controller.appendNumber(createMockEvent('0'));

      controller.performCalculation();
      expect(controller.calculatorOutput).toBe(Infinity);
    });

    it('sets output to "Error" when dividing 0 by 0', () => {
      controller.calculatorOutput = '0';
      controller.appendOperation(createMockEvent('/'));
      controller.appendNumber(createMockEvent('0'));

      controller.performCalculation();
      expect(controller.calculatorOutput).toBe('Error');
    });

    it('uses correct precision when adding decimals', () => {
      controller.calculatorOutput = '.1';
      controller.appendOperation(createMockEvent('+'));
      controller.appendNumber(createMockEvent('.2'));

      controller.performCalculation();
      expect(controller.calculatorOutput).toBe(0.3);
    });
  });

  describe('$scope.appendOperation keeps track of an entered operator', () => {
    it('if a new operator is entered when there are already two operands, it should go ahead and perform the operation', () => {
      controller.calculatorOutput = '1';
      controller.appendOperation(createMockEvent('+'));
      controller.appendNumber(createMockEvent('3'));

      controller.appendOperation(createMockEvent('+'));
      expect(controller.calculatorOutput).toBe(4);
    });

    it('should still display the original value if no operator has been previously specified', () => {
      controller.calculatorOutput = '1';
      controller.appendOperation(createMockEvent('+'));
      expect(controller.calculatorOutput).toBe('1');

    });

    it('if a new operator is entered when there is only one operand, replace the existing one', () => {
      controller.appendNumber(createMockEvent('8'));
      controller.appendOperation(createMockEvent('+'));
      controller.appendOperation(createMockEvent('-'));
      controller.appendNumber(createMockEvent('5'));

      controller.performCalculation();
      expect(controller.calculatorOutput).toBe(3);
    });

    it('if a new operator is entered when there is already one, the calculation should be done automatically', () => {
      controller.appendNumber(createMockEvent('8'));
      controller.appendOperation(createMockEvent('+'));
      controller.appendNumber(createMockEvent('5'));
      controller.appendOperation(createMockEvent('-'));

      expect(controller.calculatorOutput).toBe(13);
    });

  });
  

  describe('$scope.invertValue inverts the current value', () => {
      xit('positive values become negative', () => {

      });

      xit('negative values become positive', () => {

      });
  })

  describe('$scope.squareRoot', () => {
    xit('changes current value to its square root', () => {

    });
  });

  describe('$scope.divideByHundred', () => {
    xit('display current value as a percentage', () => {

    });
  });

  describe('$scope.describe', () => {
    xit('clears operator, operands, and output', () => {

    });
  });

});