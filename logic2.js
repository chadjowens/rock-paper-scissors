console.log("Hello World!!");

let playerInput = "ROCK";
let playerSelection = playerInput.toLowerCase();
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

    // //Getting the user selection input
    // function getPlayerChoice() {
        console.log("playerSelection= ", playerSelection);
    //     }

    function playRound(playerSelection, computerSelection) {
        
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
            return "Input not valid.";
        }
    }
    console.log(playRound(playerSelection, computerSelection));

} 

for (let i = 1; i <= 5; i++) {
    console.log("Game " + i + " ////////////");
    game(); 
}



