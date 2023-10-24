console.log("Hello World!!");

// let playerInput = "ROCK";
// let playerSelection = playerInput.toLowerCase();
// const playerSelection = getPlayerChoice();  


function game() {

// Holding string value returned by function into declared variable
let computerSelection = getComputerChoice();
console.log("computerSelection= ", computerSelection); 

    // Making a number for computer choice and converting it to an equivalent string
    function getComputerChoice() {
        let computerChoice = Math.floor((Math.random() * 3) + 1);
        console.log("computerChoice= ", computerChoice);
        // console.log("///////////////");
        
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

    //Getting the user selection input
    let playerInput = prompt("Enter your choice of Rock, Paper or Scissors")
    let playerSelection = playerInput.toLowerCase();
    // let playerSelection = playerInput.toLowerCase(getPlayerChoice());
    // let playerSelection = getPlayerChoice();


    // function getPlayerChoice() {
    //         // Converting number to equivalent string
    //         if (playerInput === "rock") {
    //             // console.log("Rock");
    //             return "rock";
    //         } else if (playerInput === "paper") {
    //             // console.log("Paper");
    //             return "paper";
    //         } else if (playerInput === "scissors") {
    //             // console.log("Scissors")
    //             return "scissors";
    //         } else {
    //             return "Input not valid.";
    //         }
    //         }
        console.log("playerInput= ", playerInput);
        console.log("playerSelection= ", playerSelection);
        // console.log("getPlayerChoice= ", getPlayerChoice());
   
    function playRound(playerSelection, computerSelection) {

        if (`${playerSelection}` === "rock" && `${computerSelection}` === "rock") {
            //console.log("It's a Draw!");
            return "It's a Draw!";
        } else if (`${playerSelection}` === "paper" && `${computerSelection}` === "paper") {
            //console.log("Sorry, you lose!");
            return "It's a Draw!";
        } else if (`${playerSelection}` === "scissors" && `${computerSelection}` === "scissors") {
            //console.log("Sorry, you lose!");
            return "It's a Draw!";

        } else if (`${playerSelection}` === "rock" && `${computerSelection}` === "paper") {
            //console.log("Sorry, you lose!");
            return "Sorry, you lose!";
        } else if (`${playerSelection}` === "rock" && `${computerSelection}` === "scissors") {
            //console.log("Sorry, you lose!");
            return "Yay, you win!";

        } else if (`${playerSelection}` === "paper" && `${computerSelection}` === "scissors") {
        // console.log("Yay, you win!");
            return "Sorry, you lose!";
        } else if (`${playerSelection}` === "paper" && `${computerSelection}` === "rock") {
            // console.log("Yay, you win!");
                return "Yay, you win!";

        } else if (`${playerSelection}` === "scissors" && `${computerSelection}` === "rock") {
            // console.log("Yay, you win!");
                return "Sorry, you lose!";
            } else if (`${playerSelection}` === "scissors" && `${computerSelection}` === "paper") {
                // console.log("Yay, you win!");
                    return "Yay, you win!";                

        } else {
            return "Input not valid.";
        }
    }

    // function roundScore(playerScore, computerScore) {
    //     // if (playRound() === "It's a Draw!)
    // }

    console.log(playRound(playerSelection, computerSelection));
    // console.log(roundScore(playerScore, computerScore));
    // console.log(playRound());
}
for (let i = 1; i <= 5; i++) {
    console.log("Game " + i + " ////////////");
    game();
    console.log("Score ")
    }