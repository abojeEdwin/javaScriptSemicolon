const {multiply,addTwoNumbers,getOddNumbers,divide,raised,getEvenNumbers} = require("./indexx.js")
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

test('return division of two numbers',()=>{
let division = divide(numberOne, numberTwo);
let answer = 5;
expect(division).toBe(answer)
})
test('return raised to power numbers', ()=>{
    let power = raised(numberOne, numberTwo);
    let result = 100
    expect(power).toBe(result);
})
test('returns even number',()=>{
    let arrayOfNumbers = [1,2,3,4,8,5];
    let result = getEvenNumbers(arrayOfNumbers);
    let answer = [2,4,8];
    expect(result).toEqual(result);
})