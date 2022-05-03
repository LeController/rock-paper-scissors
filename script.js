possibleMoves = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    console.log(possibleMoves[Math.floor(Math.random()*3)]);
    return possibleMoves[Math.floor(Math.random()*3)];

}

computerPlay();
