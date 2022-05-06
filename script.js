possibleMoves = ['rock', 'paper', 'scissors'];

let computerScore = 0;
let playerScore = 0;

const container = document.querySelector('#container');

// evaluates player and computer result
game:
function playRound(playerSelection, computerSelection) {

    const result = document.createElement('div');
    const score = document.createElement('div');
    const winner = document.createElement('h1');

    switch (true) {
        case (playerSelection === computerSelection):
            result.textContent = "It's a draw!"
            break;
        case (playerSelection === 'rock' && computerSelection === 'paper'):
            result.textContent = "You lose! Paper beats rock."
            computerScore++;
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
            result.textContent = "You win! Rock beats scissors."
            playerScore++;
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
            result.textContent = "You lose! Scissors beats paper."
            computerScore++;
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock'):
            result.textContent = "You win! Paper beats rock." 
            playerScore++;
            break;
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
            result.textContent = "You lose! Rock beats scissors."
            computerScore++;
            break;
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
            result.textContent = "You win! Scissors beats paper."
            playerScore++;
            break;
    }
    container.appendChild(result);
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    container.appendChild(score);
    
    if (playerScore === 5) {
        winner.textContent = "YOU ARE WINNER!";
        container.appendChild(winner);
        computerScore = 0;
        playerScore = 0;
    } else if (computerScore === 5) {
        winner.textContent = "YOU LOSE!";
        container.appendChild(winner);
        computerScore = 0;
        playerScore = 0;
    };
}

// randomly rolls computer moves
function computerPlay() {
    computerMove = possibleMoves[Math.floor(Math.random()*3)]
    // console.log(`Computer played ${computerMove}!`)
    return computerMove;
}

const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const paper = document.querySelector('#paper')

rock.addEventListener('click', function(){
    playRound('rock', computerPlay())
});

paper.addEventListener('click', function(){
    playRound('paper', computerPlay())
});

scissors.addEventListener('click', function(){
    playRound('scissors', computerPlay())
});

// runs 5 rounds of game and tallies score
function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your selection?");
        const computerSelection = computerPlay();
        winner = playRound(playerSelection, computerSelection);
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        } 
        alert(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }
    playerScore > computerScore ? alert("You are winner!") : 
    computerScore > playerScore ? alert("You have lost!") :
    alert("It's a tie!");
}