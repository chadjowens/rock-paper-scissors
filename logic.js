console.log("Hello World!!");


function playRound(playerSelection, computerSelection) {
    console.log("Play Round!!");

    if (playerSelection == 1 && computerSelection == 1) {
        console.log("It's a Draw!");
    }
    
}

function getComputerChoice(computerChoice) {
    computerChoice = Math.floor((Math.random() * 3) + 1);
    console.log(computerChoice);
    
    if (computerChoice == 1) {
        console.log("Rock");
    } else if (computerChoice == 2) {
        console.log("Paper");
    } else {
        console.log("Scissors")
    }
}

const playerSelection = 1;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));




// let rock = 1; 
// let paper = 2; 
// let scissors = 3;

// function getComputerChoice(randomNumber) {
//     return randomNumber;
// }

// function getComputerChoice("Rock", "Paper", "Scissors"); {

// }

// let choice = getComputerChoice("Rock", "Paper", "Scissors");
// getComputerChoice();

// console.log(choice);