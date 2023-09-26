let num1;
let num2;
let operator;
let result;


const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    if (b == 0) {
        displayMain.textContent = "ERROR";
        alert('Dividing by zero is not allowed!');
    } else if (b !== 0) {
        return a / b;
    }
   
}

const operate = function(x, op, y) {
    if (op == '+'){
        return add(x, y);
    } else if (op == '-'){
        return subtract(x, y);
    } else if (op == '*'){
        return multiply(x, y);
    } else if (op == '/'){
        return divide(x, y);
    }
}

const numbers = document.querySelectorAll(".number");
const displayMain = document.querySelector(".calculator-output-main");
const displaySecondary = document.querySelector(".calculator-output-secondary");


console.log(numbers);
console.log(displayMain);
console.log(displaySecondary);

numbers.forEach(number => {
    number.addEventListener('click', function() {
        console.log(number.textContent);
        displayMain.textContent += number.textContent;
       
    })
})



const operators = document.querySelectorAll('.operator');

operators.forEach(op => {
    op.addEventListener('click', function() {
        console.log(op.textContent);
        operator = op.textContent;
        num1 = +displayMain.textContent;
        console.log(`num1 ${num1}`);
        displayMain.textContent = '';
        displaySecondary.textContent = num1;
        return operator;
    })
}) 

const equals = document.querySelector('.equals');

equals.addEventListener('click', function() {
    num1 = +displaySecondary.textContent;
    num2 = +displayMain.textContent;
    console.log(`num1 ${num1} num2 ${num2}`);
    result = operate(num1, operator, num2);
    console.log(`result ${result}`);
    displaySecondary.textContent = displayMain.textContent;
    displayMain.textContent = result;
    return result;
})


const clear = document.querySelector('.clear');

clear.addEventListener('click', function() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    displayMain.textContent = '';
    displaySecondary.textContent = '';
})


