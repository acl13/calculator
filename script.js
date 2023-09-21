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
    return a / b;
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


