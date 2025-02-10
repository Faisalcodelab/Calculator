let lastInputIsOperator = false;

function appendNumber(number) {
    document.getElementById('display').value += number;
    lastInputIsOperator = false; // Reset the flag when a number is appended
}

function appendOperator(operator) {
    if (!lastInputIsOperator) {
        document.getElementById('display').value += operator;
        lastInputIsOperator = true; // Set the flag when an operator is appended
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    lastInputIsOperator = false; // Reset the flag when the display is cleared
}


function calculate() {
    try {
        let expression = document.getElementById('display').value;
        // Check if the expression ends with an operator or if it's empty
        if (expression.endsWith('+') || expression.endsWith('-') || expression.endsWith('*') || expression.endsWith('/')) {
            // If the expression ends with an operator, do nothing
            return;
        } else if (expression !== '') {
            // Evaluate the expression only if it's not empty
            let result = eval(expression);
            if (result === undefined || isNaN(result) || !isFinite(result)) {
                document.getElementById('display').value = '';
            } else {
                document.getElementById('display').value = result;
            }
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
