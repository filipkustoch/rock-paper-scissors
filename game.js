const computerChoice = ["rock", "paper", "scisors"];
let playerScore = 0,
    computerScore = 0;
let endOfGame = false;
let wygrany;

function computerPlay() {
    let computerChoiceResult = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log("Comp choice is: " + computerChoiceResult);
    return computerChoiceResult;
}

function playerPlay(playerSelection) {
    // let playerSelection = prompt("Rock,Paper,Scisors?");
    // playerSelection = playerSelection.toLowerCase();
    // if (playerSelection === "r") {
    //     playerSelection = "rock";
    // } else if (playerSelection === "p") {
    //     playerSelection = "paper";
    // } else if (playerSelection === "s") {
    //     playerSelection = "scisors";
    // }
    // console.log("Player choice is " + playerSelection);
    // return playerSelection;
    console.log(playerSelection);
    return playerSelection;
}

function playRound(playerSelection, computerChoiceResult) {
    if (playerSelection == computerChoiceResult) {
        alert("Tie!");
    } else if ((computerChoiceResult == "rock" && playerSelection == "scissors") ||
        (computerChoiceResult == "scissors" && playerSelection == "paper") ||
        (computerChoiceResult == "paper" && playerSelection == "rock")) {
        alert("Computer is the winner!");
        computerScore++;
    } else {
        alert("Player is the winner!");
        playerScore++;
    }
    alert("Wynik gracza: " + playerScore + " A wynik komputera to: " + computerScore);
    if (playerScore == 3 || computerScore == 3) {
        endOfGame = true;
    }
}

function game() {
    //while (!endOfGame) {
    playRound(playerPlay(), computerPlay());
    //}
    // if (endOfGame == true) {
    //     if (playerScore > computerScore) {
    //         wygrany = "Gracz";
    //     } else {
    //         wygrany = "komputer";
    //     }
    //     alert("Wygrał " + wygrany);
    // }
}

function gameRock() {
    playRound(playerPlay("rock"), computerPlay());
}

function gamePaper() {
    playRound(playerPlay("paper"), computerPlay());
}

function gameScissors() {
    playRound(playerPlay("scissors"), computerPlay());
}