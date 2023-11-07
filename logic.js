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

// Making a number for computer choice and converting it to an equivalent string
const options = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const choice = options[Math.floor((Math.random() * options.length))];
    // console.log(choice);
    return choice;
}

// Calculate number of draws or wins for each round
function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection) {
        scoreDraws++;
        console.log("It's a Tie");
        console.log("Draws: " + scoreDraws);
        const p = document.createElement('p');
        p.innerText = `You tied! You both picked ${playerSelection}`;
        outcomeDiv.appendChild(p);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        scorePlayer++
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        console.log("Player Wins: " + scorePlayer);
        const p = document.createElement('p');
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
        outcomeDiv.appendChild(p);
    } else {
        scoreComputer++;
        console.log(`You Lose! Computer Wins! ${computerSelection} beats ${playerSelection}`)
        console.log("Computer Wins: " + scoreComputer);
        const p = document.createElement('p');
        p.innerText = `You Lose! Computer Wins! ${computerSelection} beats ${playerSelection}`;
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
        h2.classList.add('player-won');
        h2.innerText = `You Won, ${scorePlayer} to ${scoreComputer} Great job beating the computer!`;
        outcomeDiv.appendChild(h2);
    } else if (scoreComputer === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `Computer Won, ${scoreComputer} to ${scorePlayer} Too bad -- you Lost to the Computer!`;
        outcomeDiv.appendChild(h2);
    }
}


// function playRound(playerSelection, computerSelection){    
//     console.log("------------------");

//     const result = checkWinner(playerSelection, computerSelection);
//     if (result == "Tie") {
//         return "It's a Tie";
//     } else if (result == "Player") {
//         return `You Win! ${playerSelection} beats ${computerSelection}`;
//     } else {
//         return `You Lose! Computer Wins! ${computerSelection} beats ${playerSelection}`;
//     }
// }

rockBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
        const playerSelection = "rock"
        playRound(playerSelection, computerSelection)
        console.log("Rock Button");
        console.log(`computer Choice: ${computerSelection}`);
        checkForWinner(scorePlayer, scoreComputer);
        updateScore(scorePlayer, scoreComputer);
        
        // console.log(result);
        // if(scorePlayer > scoreComputer){
        //     console.log("Player was the winner!!!");
        // } else if (scorePlayer < scoreComputer) {
        //     console.log("Computer was the winner!!!");
        // } else {
        //     console.log("There was a tie");
        // }   
    });

paperBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
        const playerSelection = "paper"
        playRound(playerSelection, computerSelection)
        console.log("Paper Button");
        console.log(`computer Choice: ${computerSelection}`);
        updateScore(scorePlayer, scoreComputer);
        checkForWinner(scorePlayer, scoreComputer);
        // console.log(result);
        // if(scorePlayer > scoreComputer){
        //     console.log("Player was the winner!!!");
        // } else if (scorePlayer < scoreComputer) {
        //     console.log("Computer was the winner!!!");
        // } else {
        //     console.log("There was a tie");
        // }   
    });

scissorsBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
        const playerSelection = "scissors"
        playRound(playerSelection, computerSelection)
        console.log("Scissors Button")
        console.log(`computer Choice: ${computerSelection}`);
        updateScore(scorePlayer, scoreComputer);
        checkForWinner(scorePlayer, scoreComputer);
        // console.log(result);
        // if(scorePlayer > scoreComputer){
        //     console.log("Player was the winner!!!");
        // } else if (scorePlayer < scoreComputer) {
        //     console.log("Computer was the winner!!!");
        // } else {
        //     console.log("There was a tie");
        // }   
    });

// function output(){
//     console.log(playRound());


// // console.log("Game Over!!!")
// // console.log("------------------");
// // console.log(`Number of Ties: ${scoreDraws}`);
// // console.log(`Player Score: ${scorePlayer}`);
// // console.log(`Computer Score: ${scoreComputer}`);

// }