// my xubuntu workspace terminal input prompt
//
//const prompts = require('prompts');
//(async () => {
//  const response = await prompts({
//    type: 'text',
//    name: 'Input',
//    message: 'Please enter your selection; Rock, Paper, Scissors'
//  });
//  console.log(response.Input);
//  let turnSet = response.Input;
//  console.log(turnSet);
//  playRound(turnSet);
//  return response.Input;
//})();

// declare inputs manually here if no way to prompt
let turns = 10; // how many turns
let playerSelection = "Rock"; // player input
let computerSelection = computerPlay(); // computer input
console.log(playRound(playerSelection, computerSelection));

// computer random choice
function computerPlay() {
    let computerTurn = Math.floor(Math.random() * 3) +1;
    //console.log(computerTurn);
    if (computerTurn === 1) {
        console.log("Computer chooses Rock");
        return "rock";
    } else if (computerTurn === 2) {
        console.log("Computer chooses Paper");
        return "paper";
    } else if (computerTurn === 3) {
        console.log("Computer chooses Scissors");
        return "scissors";
    } else {
        console.log("Computer chooses Error");
        return "computer choice error";
    }
}

// player input
function userPlay() {
    // prompt for input below otherwise manually declare at top of code
    if (input.toLowerCase() === "rock") {
        console.log("Player chooses Rock");
        return "rock"
    } else if (input.toLowerCase() === "paper") {
        console.log("Player chooses Paper");
        return "paper"
    } else if (input.toLowerCase() === "scissors") {
        console.log("Player chooses Scissors");
        return "scissors"
    } else {
        console.log("invalid input. only choose rock, paper, or scissors");
        return "player choice error"
    }
}

// one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie game");
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("Player wins");
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log("Computer wins");
    } else {
        console.log("error round");
    }
}