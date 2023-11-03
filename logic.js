console.log("Hello World!!");

const rockBtn = document.querySelector("#rockBtn");
// const paperBtn = document.querySelector('.paperBtn');
// const scissorsBtn = document.querySelector('.scissorsBtn');


// Making a number for computer choice and converting it to an equivalent string
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor((Math.random() * options.length))];
    // console.log(choice);
    return choice;
    
}

// Calculate number of draws or wins for each round
function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
    

}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie";
    } else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! Computer Wins! ${computerSelection} beats ${playerSelection}`;
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper, Scissors");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if(options.includes(choiceInLower)){
            return choiceInLower;
        }
    }
}

// Set the game to play 5 rounds
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    let scoreDraws = 0;
    console.log("Welcome");
    for (let i = 1; i <= 5; i++) {
        console.log("Game " + i + " ////////////");
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("------------------");
        if (checkWinner(playerSelection, computerSelection) === "Player"){
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        } else {
            scoreDraws++;
        }
    
    }
    console.log("Game Over!!!")
    console.log("------------------");
    console.log(`Number of Ties: ${scoreDraws}`);
    console.log(`Player Score: ${scorePlayer}`);
    console.log(`Computer Score: ${scoreComputer}`);
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner!!!");
    } else if (scorePlayer < scoreComputer) {
        console.log("Computer was the winner!!!");
    } else {
        console.log("There was a tie");
    }
}

game();




// rockBtn.addEventListener("click", () => {
//     const playerSelection = "rock"
//     playRound(playerSelection, computerSelection)
//     console.log("Rock Button")
// });
//     // const rockBtn = document.getElementById("rockBtn");



    
  





