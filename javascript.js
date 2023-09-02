// Adding global variables
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let positions = ["rock", "paper", "scissor"];

// Function to get computer's choice
let getComputerChoice = () => {
    let computerChoice = positions[Math.floor(Math.random() * positions.length)]; 
    return computerChoice;
};

// Function to get player's choice
let playerSelect = () => {
    let playerChoice = prompt("Please enter your weapon", "Rock, Paper, or Scissors");
    return playerChoice ? playerChoice.toLowerCase() : null;
};

// Function to play a round
function playRound(playerChoice, computerChoice) {
    if (((playerChoice == "paper") && (computerChoice == "rock")) || 
    ((playerChoice == "scissor") && (computerChoice == "paper")) ||
    ((playerChoice == "rock") && (computerChoice == "scissor"))) {
        playerScore++;
        roundWinner = 'player';
    }
    else if(playerChoice === computerChoice) {
        roundWinner = "It's a tie";
    }
    else {
        computerScore++;
        roundWinner = 'computer';
    }
    updateScoreMessage(roundWinner, playerChoice, computerChoice);
}

// Function to check if the game is over
function isGameOver() {
    return playerScore === 3 || computerScore === 3;
}

// Function to display the winner of the game
function setFinalMessage() {
    if (playerScore > computerScore) {
        return 'You won!';
    } else if (playerScore < computerScore) {
        return 'You lost...';
    } else {
        return "It's a tie!";
    }
}

// Function to update the score and round winner message
function updateScoreMessage(roundWinner, playerChoice, computerChoice) {
    console.log(`You chose ${playerChoice}, Computer chose ${computerChoice}`);
    console.log(`Round Winner: ${roundWinner}`);
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    
    if (isGameOver()) {
        console.log(setFinalMessage());
    }
}

// Main game loop
while (!isGameOver()) {
    const playerChoice = playerSelect();
    
    if (!playerChoice) {
        alert('Please enter a valid choice: Rock, Paper, or Scissors');
        continue;
    }

    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}
