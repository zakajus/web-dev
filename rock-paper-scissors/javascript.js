// Returns selection string
function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	switch (choice) {
		case 0: {
			return "Rock";
		}
		case 1: {
			return "Paper";
		}
		case 2: {
			return "Scissors";
		}
	}
}

// Returns selection string
function getPlayerSelection() {
	let choice = prompt("Make your selection:\n1) Rock\n2) Paper\n3) Scissors");
	while (!["1", "2", "3"].includes(choice)) {
		alert("Please enter 1, 2 or 3!");
		choice = prompt("Make your selection:\n1) Rock\n2) Paper\n3) Scissors");
	}

	// choice = prompt("Make your selection:\n1) Rock\n2) Paper\n3) Scissors")
	choice = parseInt(choice);

	switch (choice) {
		case 1: {
			return "Rock";
		}
		case 2: {
			return "Paper";
		}
		case 3: {
			return "Scissors";
		}
	}
}

// Returns number based on outcome of round:
// -1 : Computer won
// 0 : Draw
// 1 : User won
function playRound(computerChoice, playerChoice) {
	let choiceComputer = computerChoice();
	let choiceUser = playerChoice();

	if (choiceComputer == choiceUser) {
		return 0; // draw
	}

	if (choiceUser == "Rock") {
		switch (choiceComputer) {
			case "Paper":
				return -1;
			case "Scissors":
				return 1;
		}
	} else if (choiceUser == "Paper") {
		switch (choiceComputer) {
			case "Rock":
				return 1;
			case "Scissors":
				return 1;
		}
	} else {
		switch (choiceComputer) {
			case "Rock":
				return -1;
			case "Paper":
				return 1;
		}
	}
}

function playBO5(roundFunc) {
	let userScore = 0;
	let computerScore = 0;
	let outcome;

	while (1) {
		if (userScore == 3) {
			alert("You won, congratz!");
			break;
		} else if (computerScore == 3) {
			alert("You lost!");
			break;
		}

		outcome = roundFunc(getComputerChoice, getPlayerSelection);

		switch (outcome) {
			case 0: {
				alert(`Draw! Score is ${userScore}:${computerScore}`);
				break;
			}

			case 1: {
				userScore++;
				alert(`Round won! Score is ${userScore}:${computerScore}`);
				break;
			}
			case -1: {
				computerScore++;
				alert(`Round lost! Score is ${userScore}:${computerScore}`);
				break;
			}
		}
	}
}

playBO5(playRound);
