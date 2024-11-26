let display = document.getElementById('display');
let currentInput = '';

function input(value) {
    if (currentInput === '' && ['+', '-', '*', '/' ,'%'].includes(value)) return;
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.textContent = currentInput;
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}
