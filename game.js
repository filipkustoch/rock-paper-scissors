const computerChoice = ["rock", "paper", "scissors"];
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
    console.log(playerSelection);
    return playerSelection;
}





function playRound(playerSelection, computerChoiceResult) {

    let playerScoreText = document.getElementById("gracz");
    let computerScoreText = document.getElementById("komputer");
    let wynikRundy = document.getElementById("wynikRundy");

    //Calls countdown function
    const count = 3;
    countdown(count);

    //counts and redirect
    function countdown(timer) {
        //Keeps the interval ID for later clear
        var intervalID;
        intervalID = setInterval(function () {

            display(timer);
            timer = timer - 1;

            if (timer < 0) {
                //Clears the timeout 
                clearTimeout(intervalID);
                // You can redirect the user after it 
                // window.location.assign("YourURL");
                if (playerSelection == computerChoiceResult) {
                    wynikRundy.innerHTML = "W tej rundzie jest remis!";
                } else if ((computerChoiceResult == "rock" && playerSelection == "scissors") ||
                    (computerChoiceResult == "scissors" && playerSelection == "paper") ||
                    (computerChoiceResult == "paper" && playerSelection == "rock")) {
                    wynikRundy.innerHTML = "W tej rundzie wygrał komputer!";
                    computerScore++;
                } else {
                    wynikRundy.innerHTML = "W tej rundzie wygrał gracz!";
                    playerScore++;
                }
                // if (playerScore == 3 || computerScore == 3) {
                //     endOfGame = true;
                // }
                playerScoreText.innerHTML = "Wynik gracza to: " + playerScore;
                computerScoreText.innerHTML = "Wynik komputera to: " + computerScore;
            }
        }, 1000);


    }

    //Modifies the countdown display
    function display(timer) {
        //Execute your diplay modification logic
        wynikRundy.innerHTML = timer;
    }
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