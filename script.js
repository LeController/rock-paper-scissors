possibleMoves = ['rock', 'paper', 'scissors'];

// evaluates player and computer result
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    switch (true) {
        case (playerSelection === computerSelection):
            alert("It's a draw!");
            console.log("It's a draw!");
            return 'draw';
            break;
        case (playerSelection === 'rock' && computerSelection === 'paper'):
            alert("You lose! Paper beats rock.");
            console.log("You lose! Paper beats rock.");
            return 'computer';
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
            alert("You win! Rock beats scissors.");
            console.log("You win! Rock beats scissors.");
            return 'player';
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
            alert("You lose! Scissors beats paper.");
            console.log("You lose! Scissors beats paper.");
            return 'computer';
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock'):
            alert("You win! Paper beats rock.");
            console.log("You win! Paper beats rock.");
            return 'player';
            break;
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
            alert("You lose! Rock beats scissors.");
            console.log("You lose! Rock beats scissors.");
            return 'computer';
            break;
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
            alert("You win! Scissors beats paper.");
            console.log("You win! Scissors beats paper.");
            return 'player';
            break;
    }
}

// randomly rolls computer move
function computerPlay() {
    computerMove = possibleMoves[Math.floor(Math.random()*3)]
    return computerMove;
}

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

game();