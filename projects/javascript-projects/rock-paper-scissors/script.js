var getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
    }
}

var getComputerChoice = () => {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;

    }
}

var determineWinner = (userChoice, computerChoice) => {
    var resultDiv = document.getElementById('result');
    if (userChoice === computerChoice) {
        resultDiv.className = "alert alert-warning my-2";
        resultDiv.innerHTML = "Result: <strong>It's a tie!</strong>";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            resultDiv.className = "alert alert-danger my-2";
            resultDiv.innerHTML = "Result: <strong>You loose!</strong>";
        } else {
            resultDiv.className = "alert alert-success my-2";
            resultDiv.innerHTML = "Result: <strong>You won!</strong>";
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            resultDiv.className = "alert alert-danger my-2";
            resultDiv.innerHTML = "Result: <strong>You loose!</strong>";
        } else {
            resultDiv.className = "alert alert-success my-2";
            resultDiv.innerHTML = "Result: <strong>You won!</strong>";
        }
    } else {
        if (computerChoice === 'rock') {
            resultDiv.className = "alert alert-danger my-2";
            resultDiv.innerHTML = "Result: <strong>You loose!</strong>";
        } else {
            resultDiv.className = "alert alert-success my-2";
            resultDiv.innerHTML = "Result: <strong>You won!</strong>";
        }
    }
}

function playGame(userInput) {
    var userChoice = getUserChoice(userInput);
    var userDiv = document.getElementById('your-choice');
    userDiv.className = "alert alert-secondary my-2";
    userDiv.innerHTML = `Your choice: ${userChoice} `;
    var computerChoice = getComputerChoice();
    var computerDiv = document.getElementById('computer-choice');
    computerDiv.className = "alert alert-secondary my-2";
    computerDiv.innerHTML = `Computer's choice: ${computerChoice} `;
    determineWinner(userChoice, computerChoice);
}