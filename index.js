const display = document.getElementById('display');
const buttons = document.querySelectorAll('.main button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (button.id === 'btnc') {
            display.innerText = "";
        } 
        else if (button.id === 'btnequal') {
            try {
                let equation = display.innerText.replace('x', '*');
                display.innerText = eval(equation);
            } catch {
                display.innerText = "Error";
            }
        } 
        else {
            display.innerText += value;
        }
    });
});
