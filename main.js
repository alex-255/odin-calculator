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
      return Math.round(divide(num1, num2) * 100) / 100;

    default:
      break;
  }
};

let num1;
let num2;
let operator;
let result;
let operator2;

const buttonPressed = () => {
  const calculator = document.querySelector(".calculator");
  const buttons = calculator.querySelectorAll(".btn");
  const display = calculator.querySelector(".display");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target.classList.contains("number")) {
        if (num1 === undefined) {
          num1 = parseInt(event.target.textContent);
          console.log(num1);
          display.textContent = num1;
        } else if (num1 !== undefined && operator === undefined) {
          num1 = parseInt(num1 + event.target.textContent);
          display.textContent = num1;
        }

        if (num2 === undefined && operator !== undefined) {
          num2 = parseInt(event.target.textContent);
          console.log(num2);
          display.textContent += num2;
        } else if (num2 !== undefined && operator !== undefined) {
          num2 = parseInt(num2 + event.target.textContent);
          display.textContent = num1 + operator + num2;
        }
      } else if (
        event.target.classList.contains("plus") ||
        event.target.classList.contains("subtract") ||
        event.target.classList.contains("multiply") ||
        event.target.classList.contains("divide")
      ) {
        if (operator === undefined) {
          operator = event.target.textContent;
          console.log(operator);
          display.textContent += operator;
        } else if (operator !== undefined && operator2 === undefined) {
          result = operate(num1, operator, num2);
          operator2 = event.target.textContent;
          num1 = result;
          operator = operator2;
          num2 = undefined;
          operator2 = undefined;
          display.textContent = num1 + operator;
        }
      } else if (event.target.classList.contains("equal")) {
        result = operate(num1, operator, num2);
        console.log(result);
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
