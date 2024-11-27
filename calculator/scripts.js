const displayField = document.getElementById("display-field");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const clearButton = document.getElementById("clear-button");
const equalsButton = document.getElementById("equals-button");
const dotButton = document.getElementById("dot-button");

let currentInput = "";
let firstOperand = null;
let secondOperand = null;
let operator = null;

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

// operate(a, b, operator)

function changeDisplay(outputString) {
    if (outputString === "") {
        displayField.textContent = "0";
    } else {
        displayField.textContent = outputString;
    }
};



numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        // fits 8 digits
        if (currentInput.length <= 7) {
            const value = button.textContent;
            currentInput += value;
            changeDisplay(currentInput);
        }
    });
});


operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput !== "") {
            firstOperand = parseFloat(currentInput);
            operator = button.textContent;
            currentInput = "";
            changeDisplay(currentInput);
        }
    })
})

dotButton.addEventListener("click", () => {
    if (currentInput !== "" && !(currentInput.includes("."))) {
        currentInput += ".";
        changeDisplay(currentInput);
    }
})

equalsButton.addEventListener("click", () => {
    if (operator && firstOperand !== null) {
        secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
            case "+":
                result = add(firstOperand, secondOperand);
                break;
            case "-":
                result = subtract(firstOperand, secondOperand);
                break;
            case "x":
                result = multiply(firstOperand, secondOperand);
                break;
            case "/":
                result = divide(firstOperand, secondOperand);
                break;
        }
        currentInput = result;
        result = result.toString();
        changeDisplay(result);
        if (result === "ERROR") {
            currentInput = "";
        }
        operator = null;
        firstOperand = null;
    }
})

clearButton.addEventListener("click", () => {
    currentInput = "";
    firstOperand = null;
    operator = null;
    changeDisplay(currentInput);
})

changeDisplay("");