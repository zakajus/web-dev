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
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b == 0) return "ERROR";
	else {
		return a / b;
	}
}

function changeDisplay(outputString) {
	if (outputString === "") {
		displayField.textContent = "0";
	} else {
		displayField.textContent = outputString;
	}

	if (outputString.length > 12) {
		displayField.style.fontSize = "30px";
	} else if (outputString.length > 9) {
		displayField.style.fontSize = "40px";
	} else if (outputString.length > 6) {
		displayField.style.fontSize = "50px";
	} else {
		displayField.style.fontSize = "60px";
	}
}

numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		// fits 16 digits
		if (currentInput.length <= 15) {
			const value = button.textContent;
			currentInput += value;
			changeDisplay(currentInput);
		}
	});
});

operatorButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (currentInput !== "") {
			firstOperand = parseFloat(currentInput);
			operator = button.textContent;
			currentInput = "";
			changeDisplay(currentInput);
		}
	});
});

dotButton.addEventListener("click", () => {
	if (currentInput !== "" && !currentInput.includes(".")) {
		currentInput += ".";
		changeDisplay(currentInput);
	}
});

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
		if (result !== "ERROR" && !Number.isInteger(result)) {
			result = result.toFixed(5);
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
});

clearButton.addEventListener("click", () => {
	currentInput = "";
	firstOperand = null;
	operator = null;
	changeDisplay(currentInput);
});

changeDisplay("");
