// terminal input prompt
let turnSet = 0
console.log(turnSet);
const prompts = require('prompts');
(async () => {
  const response = await prompts({
    type: 'text',
    name: 'Input',
    message: 'Please enter your selection; Rock, Paper, Scissors'
  });
  console.log(response.Input);
  turnSet = response.Input;
  console.log(turnSet);
  playRound(turnSet);
  return response.Input;
})();

// computer random choice
function computerPlay() {
    let computerTurn = Math.floor(Math.random() * 3) +1;
    console.log(computerTurn);
    if (computerTurn === 1) {
        console.log("Rock");
        return "Rock";
    } else if (computerTurn === 2) {
        console.log("Paper");
        return "Paper";
    } else if (computerTurn === 3) {
        console.log("Scissors");
        return "Scissors";
    } else {
        console.log("Error");
        return "Error";
    }
}

//// player input
//function computerPlay() {
//    let computerTurn = Math.floor(Math.random() * 4) +1;
//    console.log(computerTurn);
//    if (computerTurn === 1) {
//        console.log("Rock");
//        return "Rock";
//    } else if (computerTurn === 2) {
//        console.log("Paper");
//        return "Paper";
//    } else if (computerTurn === 3) {
//        console.log("Scissors");
//        return "Scissors"
//    } else {
//        console.log("Error");
//        return "Error"
//    }
//}

function playRound(turns) {
    //winner = playerSelection vs computerSelection
    if (turns > 0) {
    computerPlay();
    turns = turns - 1;
    }
}