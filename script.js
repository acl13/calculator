let num1;
let num2;
let operator;
let result;


const add = function (a, b) {
    return Math.round((a + b)*1000000)/1000000;
}

const subtract = function (a, b) {
    return Math.round((a - b)*1000000)/1000000;
}

const multiply = function (a, b) {
        return Math.round((a * b)*1000000)/1000000;
}

const divide = function (a, b) {
    if (b == 0) {
        displayMain.textContent = "ERROR";
        alert('Dividing by zero is not allowed!');
    } else if (b !== 0) {
        return Math.round((a / b)*1000000)/1000000;
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



numbers.forEach(number => {
    number.addEventListener('click', function() {
        displayMain.textContent += number.textContent;
       
    })
})




const operators = document.querySelectorAll('.operator');

operators.forEach(op => {
    const getOperator = function() {
        console.log(op.textContent);
            operator = op.textContent;
            num1 = +displayMain.textContent;
            displayMain.textContent = '';
            displaySecondary.textContent = num1;
            return operator;
    }
    op.addEventListener('click', function() {
        if (operator == undefined) {
        
            getOperator();
        } else {
            getResult();
            getOperator();
        }
    })
}) 


const getResult = function() {
    num1 = +displaySecondary.textContent;
    num2 = +displayMain.textContent;
    result = operate(num1, operator, num2);
    displaySecondary.textContent = displayMain.textContent;
    displayMain.textContent = result;
    return result;
}

const equals = document.querySelector('.equals');

equals.addEventListener('click', function() {
    console.log(displayMain.textContent);
    if (displayMain.textContent === '') {
        num2 = +displaySecondary.textContent;
       //If no second number is provided, the operation will remain unchanged
        console.log(`num2 ${num2}`);
    } else if (operator == undefined) {
       console.log('No operator. Number will remain unchanged.'); 
    } else    {
   getResult();
}
})


const clear = document.querySelector('.clear');

clear.addEventListener('click', function() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    displayMain.textContent = '';
    displaySecondary.textContent = '';
})


