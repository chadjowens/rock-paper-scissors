console.log("Hello World!!");

let playerInput = "Rock";
let playerSelection = playerInput.toLowerCase();
// const playerSelection = getPlayerChoice();

// Holding string value returned by function into declared variable
const computerSelection = getComputerChoice();
console.log(computerSelection);

// Making a number for computer choice and converting it to an equivalent string
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    console.log(computerChoice);
    
    // Converting number to equivalent string
    if (computerChoice === 1) {
        // console.log("Rock");
        return "rock";
    } else if (computerChoice === 2) {
        // console.log("Paper");
        return "paper";
    } else if (computerChoice === 3) {
        // console.log("Scissors")
        return "scissors";
    } else {
        return "Input not valid.";
    }
}

// //Getting the user selection input
// function getPlayerChoice() {
//     let choice = userInput.toLowerCase();
//         if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
//             return userInput;
//         } else {
//             return "That choice doesn't exist"
//         }
//     }

// Declared function for playRound and takes in 2 parameters (playerSelection and computerSelection)
function playRound(playerSelection, computerSelection) {
    // console.log("Play Round!!");
    console.log("Play Round!!");
    // console.log(computerChoice);

    if (`${playerSelection}` === "rock" && computerSelection === "rock") {
        //console.log("It's a Draw!");
        return "It's a Draw!";
    } else if (`${playerSelection}` === "rock" && computerSelection === "paper") {
        //console.log("Sorry, you lose!");
        return "Sorry, you lose!";
    } else if (`${playerSelection}` === "rock" && computerSelection === "scissors") {
       // console.log("Yay, you win!");
        return "Yay, you win!";
    } else {
        return "Input not valid."
    }
}
console.log(playRound(playerSelection, computerSelection));


// function game() {
    // console.log("Hello World!!");
    // console.log("Play Round!!");
    // // console.log(computerChoice);
    // console.log(computerSelection);
    // for (i = 1, i <= 4, i++);
    // playRound(playerSelection, getComputerChoice());
    // console.log(playerSelection, computerSelection);

    // playRound(playerSelection, getComputerChoice());
    // console.log(playerSelection, computerSelection);
    
    // playRound(playerSelection, getComputerChoice());
    // console.log(playerSelection, computerSelection);
   
    // playRound(playerSelection, getComputerChoice());
    // console.log(playerSelection, computerSelection);

    // playRound(playerSelection, getComputerChoice());
    // console.log(playerSelection, computerSelection);
   
    // console.log(getComputerChoice(playRound(playerSelection, computerSelection))); 
    // console.log(getComputerChoice(playRound(playerSelection, computerSelection))); 
    // playRound();
// }

// game();
// console.log(playRound(playerSelection, computerSelection));
