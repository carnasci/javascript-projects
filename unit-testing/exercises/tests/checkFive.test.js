const checkFive = require("../checkFive");

describe("checkFive", function (){

    test("should return 'num is less than 5. when passed a num < 5", () => {
        expect(checkFive(2)).toBe('2 is less than 5.');
    });

    test("should return 'num is greater than 5. when passed a num > 5", () => {
        expect(checkFive(7)).toBe('7 is greater than 5.');
    });

    test("should return 'num is equal to 5. when passed a num = 5", () => {
        expect(checkFive(5)).toBe('5 is equal to 5.');
    });

});