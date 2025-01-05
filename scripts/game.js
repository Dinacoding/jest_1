let game = {
    score: 0,
    currentGame:[],
    playerMoves:[],
    choices:["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    resetScore()
    addTurn()

}

function resetScore () {
    document.getElementById("score").innerText = game.score;
    
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.currentGame[Math.floor(Math.random()*4)]);
    //addTurn()



}
module.exports = { game, newGame, resetScore, addTurn };