function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b == 0)
        return "ERROR";
    else {
        return a / b;
    }
}

operate(a, b, operator)