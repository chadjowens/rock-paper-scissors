console.log("Hello World!!");

let scorePlayer = 0;
let scoreComputer = 0;
let scoreDraws = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const outcomeDiv = document.querySelector('.outcome');
const container = document.querySelector('.container');
const scorePlayerSpan = document.querySelector('.player-score');
const scoreComputerSpan = document.querySelector('.computer-score');
const container2 = document.querySelector('.container-2')

// Making a number for computer choice and converting it to an equivalent string
const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const choice = options[Math.floor((Math.random() * options.length))];
    // console.log(choice);
    return choice;
}

// Calculate number of draws / wins / loses for each round
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        scoreDraws++;
        const p = document.createElement('p');
        p.innerText = `You Tied! You both picked ${playerSelection}`;
        outcomeDiv.appendChild(p);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        scorePlayer++
        const p = document.createElement('p');
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
        outcomeDiv.appendChild(p);
    } else {
        scoreComputer++;
        const p = document.createElement('p');
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
        outcomeDiv.appendChild(p);
    }
}

const updateScore = (scorePlayer, scoreComputer) => {
        scorePlayerSpan.innerText = `Player Score: ${scorePlayer}`;
        scoreComputerSpan.innerText = `Computer Score: ${scoreComputer}`;
}

const checkForWinner = (scorePlayer, scoreComputer) => {
    if (scorePlayer === 5) {
        const h2 = document.createElement('h2');
        const restartBtn = document.createElement('button');

        h2.classList.add('player-won');
        h2.innerText = `You Won, ${scorePlayer} to ${scoreComputer} Great job beating the computer!`;
        outcomeDiv.appendChild(h2);
        document.querySelector("#rockBtn").disabled="disabled";
        document.querySelector("#paperBtn").disabled="disabled";
        document.querySelector("#scissorsBtn").disabled="disabled";

        restartBtn.id = 'restart-btn';
        restartBtn.innerHTML = 'Restart'
        outcomeDiv.appendChild(restartBtn);
        
        restartBtn.addEventListener("click", () => {
            window.location.reload();
            });
        
        
    } else if (scoreComputer === 5) {
        const h2 = document.createElement('h2');
        const restartBtn = document.createElement('button');

        h2.classList.add('computer-won');
        h2.innerText = `Computer Won, ${scoreComputer} to ${scorePlayer} Too bad -- you Lost to the Computer!`;
        outcomeDiv.appendChild(h2);
        document.querySelector("#rockBtn").disabled="disabled";
        document.querySelector("#paperBtn").disabled="disabled";
        document.querySelector("#scissorsBtn").disabled="disabled";

        restartBtn.id = 'restart-btn';
        restartBtn.innerHTML = 'Restart'
        outcomeDiv.appendChild(restartBtn);

        restartBtn.addEventListener("click", () => {
            window.location.reload();
            });
        
    }
}

rockBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
        const playerSelection = "rock"
        playRound(playerSelection, computerSelection)
        checkForWinner(scorePlayer, scoreComputer);
        updateScore(scorePlayer, scoreComputer);
    });

paperBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
        const playerSelection = "paper"
        playRound(playerSelection, computerSelection)
        updateScore(scorePlayer, scoreComputer);
        checkForWinner(scorePlayer, scoreComputer);
    });

scissorsBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
        const playerSelection = "scissors"
        playRound(playerSelection, computerSelection)
        updateScore(scorePlayer, scoreComputer);
        checkForWinner(scorePlayer, scoreComputer); 
    });