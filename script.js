// Select the display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value) {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Clear button functionality
clearButton.addEventListener('click', () => {
    currentInput = "";
    display.value = "";
});

// Calculate and display result on "=" click
equalButton.addEventListener('click', () => {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result;
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
});
