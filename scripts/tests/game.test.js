/**
 * @jest-environment jsdom
 */
const { game , newGame, resetScore, addTurn} = require("../game");

beforeAll(() =>{
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object containt correct keys", () =>{
    test("score key exists", () =>{
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () =>{
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists",() =>{
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists",() =>{
        expect("choices" in game).toBe(true);
    });
    test( "choices contains correct id", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
})

describe("new game works correctly", () => {
    beforeAll(() => {
      game.score = 43; 
      game.playerMoves = ["oeiei", "dududu"];
      game.currentGame = ["oeiei", "dududu"];
      newGame(); 
    });
  
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0); 
    });    
    test("clear the playerMoves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should be one move in by the computer", () => {
        expect(game.currentGame.length).toBe(1);
    });

    test("should be equal to 0 the element with id score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
  });
