document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    const display = document.querySelector('.display input');
    let currentInput = '';
    let operator = null;
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            switch (value) {
                case 'AC':
                    currentInput = '';
                    operator = null;
                    previousInput = '';
                    updateDisplay();
                    break;
                case 'C':
                    currentInput = currentInput.slice(0, -1);
                    updateDisplay();
                    break;
                case '%':
                case '/':
                case 'X':
                case '-':
                case '+':
                case '^':
                    if (currentInput) {
                        previousInput = currentInput;
                        currentInput = '';
                        operator = value;
                        updateDisplay();
                    }
                    break;
                case '=':
                    if (operator && previousInput) {
                        calculate();
                        operator = null;
                    }
                    break;
                default:
                    currentInput += value;
                    updateDisplay();
                    break;
            }
        });
    });

    function updateDisplay() {
        display.value = previousInput + (operator ? ' ' + operator + ' ' : '') + currentInput;
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '%':
                result = prev % current;
                break;
            case '/':
                result = prev / current;
                break;
            case 'X':
                result = prev * current;
                break;
            case '-':
                result = prev - current;
                break;
            case '+':
                result = prev + current;
                break;
            case '^':
                result = Math.pow(prev, current);
                break;
            default:
                return;
        }

        currentInput = result.toString();
        previousInput = '';
        updateDisplay();
    }
});
