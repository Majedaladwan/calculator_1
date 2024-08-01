let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = null;

document.querySelectorAll('.button').forEach(button =>{
    button.addEventListener('click', () => {
        const number = button.getAttribute('data-number');
        const op = button.getAttribute('data-operator');
        
        if (number !== null) {
            appendNumber(number);
        } else if (op !== null) {
            appendOperator(op);
        }
    });
});

document.getElementById('decimal').addEventListener('click', appendDecimal);
document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clearDisplay);

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator === null) {
        previousInput = currentInput;
        currentInput = '0';
    }
    operator = op;
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function calculate() {
    if (operator !== null && previousInput !== null) {
        currentInput = eval(previousInput + operator + currentInput).toString();
        operator = null;
        previousInput = null;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}
