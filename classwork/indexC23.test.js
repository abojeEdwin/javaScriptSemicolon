const {getDoubledNumbers, getEvenNumbers,getOddNumbers} = require("./array")

beforeEach(()=>{
    numbers = [2,3,4,5,6,7]
});

test("multiply each element by two", ()=>{
    let result = getDoubledNumbers(numbers);
    let answer = [4,6,8,10,12,14];
    expect(result).toEqual(answer);
})

test("get even numbers", ()=>{
    let result = getEvenNumbers(numbers);
    let answer = [2,4,6];
    expect(result).toEqual(answer);
})

test("get odd numbers", () =>{
    let result = getOddNumbers(numbers);
    let answer = [3,5,7]
    expect(result).toEqual(answer);
})