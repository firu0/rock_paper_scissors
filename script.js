//Initial variables
var playerHand;
var computerHand;

var playerScore = 0;
var computerScore = 0;

// Function to print scores
function printScore () {
    playerScoreContent.textContent = playerScore
    playerScoreContainer.appendChild(playerScoreContent);

    computerScoreContent.textContent = computerScore
    computerScoreContainer.appendChild(computerScoreContent);
}

// Prepares to print player score
const playerScoreContainer = document.querySelector('#playerScore');
const playerScoreContent = document.createElement('div2');
playerScoreContent.classList.add('playerScoreContent');

// Prepares to print computer score
const computerScoreContainer = document.querySelector('#computerScore');
const computerScoreContent = document.createElement('div2');
computerScoreContent.classList.add('computerScoreContent');

// Prepares to print result
const container = document.querySelector('#result');
const content = document.createElement('div');
content.classList.add('content');

// Function to run the game when button is pressed
function theGame(playerHand) {
    
    // Get random number to detirmine computer hand
    function getCompHand() {
        var ranNum = Math.floor(Math.random() * (4 - 1) ) + 1;
        if (ranNum === 1) {
            computerHand = "rock";
        }
        else if (ranNum === 2) {
            computerHand = "paper";
        }
        else if (ranNum === 3) {
            computerHand = "scissors"
        }
      }

      getCompHand();

if (playerHand === "rock") {
    if (computerHand === "rock") {
        content.textContent = 'Computer plays rock. TIE!';
        container.appendChild(content);
    }
    else if (computerHand === "paper") {
        content.textContent = 'Computer plays paper. YOU LOSE!';
        container.appendChild(content);
        computerScore = computerScore + 1;
        printScore ()
    }
    else if (computerHand === "scissors") {
        content.textContent = 'Computer plays scissors. YOU WIN!';
        container.appendChild(content);
        playerScore = playerScore + 1;
        printScore ()
}}
else if (playerHand === "paper") {
    if (computerHand === "paper") {
        content.textContent = 'Computer plays paper. TIE!';
        container.appendChild(content);
    }
    else if (computerHand === "scissors") {
        content.textContent = 'Computer plays scissors. YOU LOSE!';
        container.appendChild(content);
        computerScore = computerScore + 1;
        printScore ()
    }
    else if (computerHand === "rock") {
        content.textContent = 'Computer plays rock. YOU WIN!';
        container.appendChild(content);
        playerScore = playerScore + 1;
        printScore ()
}}
else if (playerHand === "scissors") {
    if (computerHand === "scissors") {
        content.textContent = 'Computer plays scissors. TIE!';
        container.appendChild(content);
    }
    else if (computerHand === "rock") {
        content.textContent = 'Computer plays rock. YOU LOSE!';
        container.appendChild(content);
        computerScore = computerScore + 1;
        printScore ()
    }
    else if (computerHand === "paper") {
        content.textContent = 'Computer plays paper. YOU WIN!';
        container.appendChild(content);
        playerScore = playerScore + 1;
        printScore ()
    }
    }
if (playerScore === 5) {
    alert("Player has 5 points!")
    }
else if (computerScore === 5) {
    alert("Computer has 5 points!")
}
    }
    
//Buttons for triggering the game
const rockBtn = document.querySelector('#rockBtn'); 
rockBtn.onclick = () => theGame("rock");

const paperBtn = document.querySelector('#paperBtn');
paperBtn.onclick = () => theGame("paper");

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.onclick = () => theGame("scissors");