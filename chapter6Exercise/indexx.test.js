const {multiply,addTwoNumbers,getOddNumbers} = require("./indexx.js")
    let numberOne = 10;
    let numberTwo = 2;

test('returns error message for negetive numbers',()=> {
    let result = multiply(numberOne,numberTwo);
    let answer = 20;
    expect(result).toBe(answer);
})

test('add two numbers', ()=>{
let sum = addTwoNumbers(numberOne, numberTwo);
let answer = 12;
expect(sum).toBe(answer);
})

test('return odd numbers', ()=>{
let arrayOfNumbers = [1,2,3,4,8,5];
let result = getOddNumbers(arrayOfNumbers);
let answer = [1,3,5]
expect(result).toEqual(result)})
