const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const operate = (num1, operator, num2) => {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        default:
            break;
    }
};

let num1;
let num2;
let operator;
let result;

const buttonPressed = () => {
    const calculator = document.querySelector(".calculator");
    const buttons = calculator.querySelectorAll(".btn");
    const display = calculator.querySelector(".display");
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            if (event.target.classList.contains("number")) {
                if (num1 === undefined) {
                    num1 = parseInt(event.target.textContent);
                    display.textContent = num1;
                } else {
                    if (num2 === undefined) {
                        num2 = parseInt(event.target.textContent);
                        display.textContent += num2;
                    }
                }
            } else if (
                event.target.classList.contains("plus") ||
                event.target.classList.contains("subtract") ||
                event.target.classList.contains("multiply") ||
                event.target.classList.contains("divide")
            ) {
                if (operator === undefined) {
                    operator = event.target.textContent;
                    display.textContent += operator;
                }
            } else if (event.target.classList.contains("equal")) {
                result = operate(num1, operator, num2);
                display.textContent += `=${result}`;
            } else if (event.target.classList.contains("clear")) {
                num1 = undefined;
                operator = undefined;
                num2 = undefined;
                display.textContent = 0;
            }
        });
    });
};

buttonPressed();
