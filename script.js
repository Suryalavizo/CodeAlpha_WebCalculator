let currentInput = '0';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let result = '';

function appendToDisplay(value) {
    if (currentInput === '0') {
        currentInput = '';
    }
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').value = currentInput;
}

function calculate() {
    if (currentInput.endsWith(operator)) {
        currentInput = currentInput.slice(0, -1); // Remove trailing operator if any
    }
    const regex = /[+\-*\/]/;
    const match = currentInput.match(regex);
    if (match) {
        operator = match[0];
        const operands = currentInput.split(operator);
        firstOperand = parseFloat(operands[0]);
        secondOperand = parseFloat(operands[1]);
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand !== 0) {
                    result = firstOperand / secondOperand;
                } else {
                    result = 'Error';
                }
                break;
            default:
                result = '';
        }
        document.getElementById('display').value = result;
        currentInput = result.toString();
    }
}
