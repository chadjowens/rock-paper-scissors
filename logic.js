console.log("Hello World!!");


// Set global variables 
let playerScore = 0;
let computerScore = 0; 
let draws = 0; 
let playerWinRound = "Player wins this round! ";
let computerWinRound = "Computer wins this round! ";
let draw = "This game is a draw! ";
    // let playerWinsGame = "Player wins the game! Congratulations! ";
    // let computerWinsGame = "Computer wins the game! Awwww :( ";

// Main logic for the game
function game() {

    // Holding string value returned by function into declared variable
    let computerSelection = getComputerChoice();
    // console.log("computerSelection= ", computerSelection); 

    // Making a number for computer choice and converting it to an equivalent string
    function getComputerChoice() {
        let computerChoice = Math.floor((Math.random() * 3) + 1);
        // console.log("computerChoice= ", computerChoice);
        console.log("*** The Computer Has Chosen ***");
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

    // Getting the user selection input
    let playerInput = prompt("Enter your choice of Rock, Paper or Scissors")
    let playerSelection = playerInput.toLowerCase();
    // console.log("playerInput= ", playerInput);
    // console.log("playerSelection= ", playerSelection);

    // Play round and determine winner of the round
    function playRound(playerSelection, computerSelection) {

        if (`${playerSelection}` === "rock" && `${computerSelection}` === "rock") {
            //console.log("It's a Draw!");
            return draw;
        } else if (`${playerSelection}` === "paper" && `${computerSelection}` === "paper") {
            //console.log("Sorry, you lose!");
            return draw;
        } else if (`${playerSelection}` === "scissors" && `${computerSelection}` === "scissors") {
            //console.log("Sorry, you lose!");
            return draw;

        } else if (`${playerSelection}` === "rock" && `${computerSelection}` === "paper") {
            //console.log("Sorry, you lose!");
            return computerWinRound;
        } else if (`${playerSelection}` === "rock" && `${computerSelection}` === "scissors") {
            //console.log("Sorry, you lose!");
            return playerWinRound;

        } else if (`${playerSelection}` === "paper" && `${computerSelection}` === "scissors") {
        // console.log("Yay, you win!");
            return computerWinRound;
        } else if (`${playerSelection}` === "paper" && `${computerSelection}` === "rock") {
            // console.log("Yay, you win!");
                return playerWinRound;

        } else if (`${playerSelection}` === "scissors" && `${computerSelection}` === "rock") {
            // console.log("Yay, you win!");
                return computerWinRound;
            } else if (`${playerSelection}` === "scissors" && `${computerSelection}` === "paper") {
                // console.log("Yay, you win!");
                    return playerWinRound;                

        } else {
            return "Input not valid.";
        }
    }
    console.log(playRound(playerSelection, computerSelection));  

    // Calculate number of draws or wins for each round
    if (playRound(playerSelection, computerSelection) == draw) {
        draws++; 
    } else if (playRound(playerSelection, computerSelection) == playerWinRound) {
        playerScore++; 
    } else if (playRound(playerSelection, computerSelection) == computerWinRound) {
        computerScore++; 
    } else {
        console.log("This statement is FALSE");
    }   
}

// Set the game to play 5 rounds
for (let i = 1; i <= 5; i++) {
    console.log("Game " + i + " ////////////");
    game();
    console.log("Total number of draws: ", draws); 
    console.log("Total number of player wins: ", playerScore); 
    console.log("Total number of computer wins: ", computerScore); 
}

// Determine game winner
if (playerScore > computerScore) {
    console.log("Player Wins The Game! Congrats!!"); 
} else if (computerScore > playerScore) {
    console.log("Computer Wins The Game! AWWWW!!"); 
} else {
    console.log("It Must Have Been A Draw! Try Again!!"); 
}
