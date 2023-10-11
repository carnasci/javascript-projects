const whoWon = require("../RPS");

describe("testing function whoWon", function(){
    
    test("should return 'TIE!' if function is passed the same arguments", ()=>{
        expect(whoWon('rock', 'rock')).toBe('TIE!');
    });

    test("should return 'Player 2 wins!' if function is passed the arguments 'rock','paper'", ()=>{
        expect(whoWon('rock', 'paper')).toBe('Player 2 wins!');
    });

    test("should return 'Player 2 wins!' if function is passed the arguments 'paper','scissors'", ()=>{
        expect(whoWon('paper', 'scissors')).toBe('Player 2 wins!');
    });

    test("should return 'Player 2 wins!' if function is passed the arguments 'scissors','rock'", ()=>{
        expect(whoWon('scissors', 'rock')).toBe('Player 2 wins!');
    });

    test("should return 'Player 1 wins!' if function is passed the any other combination of given arguments arguments", ()=>{
        expect(whoWon('rock', 'scissors')).toBe('Player 1 wins!');
    });

});