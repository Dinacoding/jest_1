/**
 * @jest-environment jsdom
 */
beforeAll(() =>{
    let fs = require("fs");
    let fileContent = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContent);
    document.close();
})

describe("game object containt correct keys", () =>{
    test("score key exists", () =>{
        expect("score" in game).toBe(true);
    })
})
