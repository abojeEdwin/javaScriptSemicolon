//const array = [1,"egg",(firstName,lastName),null,[]]; // LITERAL METHOD

const arrayOfNumbers = new Array(2); //ARRAY CONSTRUCTOR
//arrayOfNumbers[0] = 20;
//arrayOfNumbers[2] = 22;
//arrayOfNumbers.push(1);
//arrayOfNumbers.push(2);
//arrayOfNumbers.push(4);

let shift = arrayOfNumbers.shift();

arrayOfNumbers.shift();
arrayOfNumbers.unshift(4);

//console.log(shift)
console.log(arrayOfNumbers);
