possibleMoves = ['rock', 'paper', 'scissors'];

let computerScore = 0;
let playerScore = 0;

// evaluates player and computer result
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const result = document.createElement('div');
    const score = document.createElement('div');
    const container = document.querySelector('#container');

    switch (true) {
        case (playerSelection === computerSelection):
            result.textContent = "It's a draw!"
            container.appendChild(result);
            console.log("It's a draw!");
            return 'draw';
            break;
        case (playerSelection === 'rock' && computerSelection === 'paper'):
            result.textContent = "You lose! Paper beats rock."
            container.appendChild(result);
            computerScore++;
            console.log("You lose! Paper beats rock.");
            return 'computer';
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
            result.textContent = "You win! Rock beats scissors."
            container.appendChild(result);
            playerScore++;
            console.log("You win! Rock beats scissors.");
            return 'player';
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
            result.textContent = "You lose! Scissors beats paper."
            container.appendChild(result);
            computerScore++;
            console.log("You lose! Scissors beats paper.");
            return 'computer';
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock'):
            result.textContent = "You win! Paper beats rock." 
            container.appendChild(result);
            playerScore++;
            console.log("You win! Paper beats rock.");
            return 'player';
            break;
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
            result.textContent = "You lose! Rock beats scissors."
            container.appendChild(result);
            computerScore++;
            console.log("You lose! Rock beats scissors.");
            return 'computer';
            break;
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
            result.textContent = "You win! Scissors beats paper."
            container.appendChild(result);
            playerScore++;
            console.log("You win! Scissors beats paper.");
            return 'player';
            break;
    }
    console.log('HI');
}

// randomly rolls computer moves
function computerPlay() {
    computerMove = possibleMoves[Math.floor(Math.random()*3)]
    console.log(`Computer played ${computerMove}!`)
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