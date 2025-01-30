const multiply = require("./indexx.js")

test('returns error message for negetive numbers',()=> {
    let numberOne = 10;
    let numberTwo = 2;
    let result = multiply(numberOne,numberTwo);
    let answer = 20;
    expect(result).toBe(answer);
})
