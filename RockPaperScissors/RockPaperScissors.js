// testing console output and file loaded
let msg = 'Hello World';
console.log(msg);

// game trigger from html
function playGame() {
    game();
  }

// computer selection
function computerPlay() {
    let computerChoices = ["rock", "paper", "scissors"];
    let computerSelection = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return computerSelection;
}

// player selection
function userPlay(count) {
    let playerInput = window.prompt(("Round: " + count + "\nWhat is your choice?"), 'paper').toLowerCase();
    if (playerInput === "rock") {
        return playerInput;
    } else if (playerInput === "paper") {
        return playerInput;
    } else if (playerInput === "scissors") {
        return playerInput;
    } else {
        console.log("invalid input. only choose rock, paper, or scissors");
        return "player choice error"
    }
}

// one round
function playRound(count) {
    playerSelection = userPlay(count);
    console.log("Player selection: " + playerSelection);
    computerSelection = computerPlay();
    console.log("Computer selection: " + computerSelection);
    alert("Player selection: " + playerSelection + "\nComputer selection: " + computerSelection)
    if (playerSelection === computerSelection) {
        console.log("Tie game");
        winner = "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        winner = "player";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
        winner = "player";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors beats Paper");
        winner = "player";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock");
        winner = "computer";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        winner = "computer";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors");
        winner = "computer";
    } else {
        console.log("I'm sorry, something went wrong with the game");
        winner = "error";
    }
    return winner
}

// overall winner
function overallWinner(playerWin, computerWin) {
    if (playerWin > computerWin) {
        return "Player!";
    } else if (playerWin < computerWin) {
        return "Computer!";
    } else {
        return "Tie!";
    }
}

// how many turns?
function turns() {
    let turnCount = window.prompt("How many turns", 5);
    if (playerInput === "rock") {
        //console.log("Player chooses: ");
        return playerInput;
    } else if (playerInput === "paper") {
        //console.log("Player chooses: ");
        return playerInput;
    } else if (playerInput === "scissors") {
        //console.log("Player chooses: ");
        return playerInput;
    } else {
        alert("invalid input. only choose rock, paper, or scissors");
        return "player choice error"
    }
}

// play game
function game() {
    let count = 1
    let playerWin = 0;
    let computerWin = 0;
    let ties = 0;
    let currentWinner = "";
    //let turns = window.prompt("How many turns", 5);
    let turns = 5
    console.log(turns);
    while (count < (turns + 1)) {
        // play a round and say round winner
        console.log("Round: " + count)
        roundWinner = playRound(count)
        if (roundWinner === "player") {
            playerWin += 1;
        } else if (roundWinner === "computer") {
            computerWin += 1;
        } else if (roundWinner === "tie") {
            ties += 1;
        } else if (roundWinner === "error") {
            alert("I'm sorry, there was an error during the round");
        } else {
            alert("I'm sorry, there was an error during the game");
        }
        // overall winner
        currentWinner = overallWinner(playerWin, computerWin);
        // display ongoing scoreboard
        alert("------------------------------\n" + count + " of " + turns + " rounds completed.\nPlayer Total Wins: " + playerWin + "\nComputer Total Wins: " + computerWin + "\nCurrent Overall Winner: " + currentWinner + "\n------------------------------")
        // increment round count
        count++;
    }
    // display final scoreboard
    alert("Final results\n------------------------------\nTotal Rounds Played: " + turns + "\n Total Ties: " + ties + "\n Player Total Wins: " + playerWin + "\nComputer Total Wins: " + computerWin + "\nOverall Winner: " + currentWinner + "\n------------------------------")
}