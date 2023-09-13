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

// Function to play a round
function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissor" && computerChoice == "paper") ||
    (playerChoice == "rock" && computerChoice == "scissor")
  ) {
    playerScore++;
    roundWinner = "player";
  } else if (playerChoice === computerChoice) {
    roundWinner = "It's a tie";
  } else {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, playerChoice, computerChoice);
}

// Function to check if the game is over
function isGameOver() {
  return playerScore === 5 || computerScore === 5;
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
    const outputDiv = document.getElementById("output")
    outputDiv.innerHTML = `You chose ${playerChoice}, Computer chose ${computerChoice}`;
    outputDiv.innerHTML = `Round Winner: ${roundWinner}`;
    outputDiv.innerHTML =`Player Score: ${playerScore}, Computer Score: ${computerScore}`;

  if (isGameOver()) {
    outputDiv.innerHTML = setFinalMessage();
    playerScore = 0;
    computerScore = 0
  }
}

// Add event listeners to the buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  });
});
