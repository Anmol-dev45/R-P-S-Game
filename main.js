let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let playerSelection = '';
let computerSelection = '';


const buttons = document.querySelectorAll('button');
const Pscore = document.querySelector('#player');
const Cscore = document.querySelector('#computer');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');


buttons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.classList.value.toUpperCase();
    computerSelection = getRandomChoice();
    playRound(playerSelection, computerSelection)
    console.log(roundWinner);
    if(playerScore == 5 || computerScore == 5)
    {
      alert(`Game is over`)
      return
    }
}))


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie'
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++
      roundWinner = 'player'
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++
      roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
  }
  
  function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }
  function updateScoreMessage(roundWinner, playerSelection, computerSelection)
  {

    computer.innerHTML = computerScore;
    player.innerHTML = playerScore;
    playerSelection = capitalizeFirstLetter(playerSelection);
    computerSelection = capitalizeFirstLetter(computerSelection);
    let result = '';
    let mg = ''
    if(roundWinner == 'player') {
      result = 'You have won this round!';
      mg = `${playerSelection} beats ${computerSelection}!`
    }
    else if(roundWinner == 'computer')
    {
      mg = `${computerSelection} beats ${playerSelection}!`
      result = 'You have lose this round...'
    }
    else {
      result = 'Tie'
      mg = `Both card are same!`
    }


    h2.innerHTML = `${result} ,Choose next card!`;
    h3.innerHTML = `${mg}`
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
