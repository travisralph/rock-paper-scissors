// const choices = ["rock", "paper", "scissors"];
// const winners = [];


// function game() {
//   for (i = 1; i <= 5; i++) {
//     playRound(i);
//   }
//   logWins()
// }

// function playRound(round) {
// const playerSelection = playerChoice();
// const computerSelection = computerChoice();
// const winner = checkWinner (playerSelection, computerSelection);
// winners.push(winner);
// logRound(playerSelection, computerSelection,winner,round)
// }

// function playerChoice() {
//   let input = prompt('Type Rock, Paper, or Scissors');
//   while (input == null) {
//     input = prompt('Type Rock, Paper, or Scissors');
//   }
//   input = input.toLowerCase();
//   let check = validateInput(input);
//   while (check == false) {
//    input = prompt (
//       "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doesn't matter."
//     );
//     while (input == null) {
//       input = prompt('Type Rock, Paper, or Scissors');
//     }
//     input = input.toLowerCase();
//     check = validateInput(input);
//   }
// return input;
// }

// function computerChoice() {
//   return choices[Math.floor(Math.random() * choices.length)];
// }

// function validateInput(choice) {
//   return choices.includes(choice);
// }

// function checkWinner(choiceP, choiceC) {
//   if(choiceP === choiceC) {
//     return 'Tie';
//   } else if (
//     (choiceP == 'rock' && choiceC == 'scissors') || 
//     (choiceP == 'paper' && choiceC == 'rock') || 
//     (choiceP == 'scissors' && choiceC == 'paper')
//   ) {
//     return 'Player';
//   } else {
//     return 'Computer'
//   }
// }

// function logWins() {
// let playerWins = winners.filter((item) => item == "Player").length;
// let computerWins = winners.filter((item) => item == "Computer").length;
// let ties = winners.filter ((item) => item == "Tie").length;
// console.log("Results: ");
// console.log('Player Wins: ', playerWins);
// console.log('Computer Wins: ', computerWins);
// console.log('Ties: ', ties)
// }

// function logRound(playerChoice, computerChoice, winner, round) {
//   console.log('Round:', round)
//   console.log('Player Chose:', playerChoice)
//   console.log('Computer Chose:', computerChoice)
//   console.log(winner, 'won the round')
//   console.log('--------------------------------------')
  
// }

//-----------------------------------------------------------------------------


let playerScore = 0
let compScore = 0
const choices = ['rock', 'paper', 'scissors']

const computerChoice = () => {
  const randomNum = Math.floor(Math.random() * choices.length)
  const compChoice = choices[randomNum]
  return compChoice
}

const playRound = (playerChoice, computerChoice) => {
  if (
    playerChoice === computerChoice
    ) {
    return 'You tie! you both chose ' + computerChoice
  } else if ((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissors' && computerChoice == 'paper')) {
    playerScore++
    return 'You win! ' + playerChoice + ' beats ' + computerChoice 
  } else {
    compScore++
    return 'Computer won... ' + computerChoice + ' beats ' + playerChoice
  }
}

const game = () => {
  for (i = 0; i < 5; i++) {
    const playerChoice = prompt('Please type Rock, Paper, or Scissors').toLowerCase()
    const computerSelection = computerChoice()
    console.log(playRound(playerChoice, computerSelection))
  }

  if (playerScore > compScore) {
    return 'You beat the computer!'
  } else if (playerScore < compScore) {
    return 'You lost to the computer...'
  } else {
    return 'You tied with the computer'
  }
}

console.log(game())

