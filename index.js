const display = document.getElementById('display');
// This selects every button inside your rows
const buttons = document.querySelectorAll('.main button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (button.id === 'btnc') {
            display.innerText = "";
        } 
        else if (button.id === 'btnequal') {
            try {
                // We replace 'x' with '*' so math works correctly
                let equation = display.innerText.replace('x', '*');
                display.innerText = eval(equation);
            } catch {
                display.innerText = "Error";
            }
        } 
        else {
            // Add the button text to the screen
            display.innerText += value;
        }
    });
});