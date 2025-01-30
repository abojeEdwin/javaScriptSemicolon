function reverse(number){
        let lastDigit = number % 10
        let dummyValue = Math.floor(number / 10)
        let secondDigit = dummyValue % 10
        let firstDigit = Math.floor(dummyValue / 10)
        console.log(lastDigit+""+ secondDigit +""+firstDigit)
};
const prompt=require("prompt-sync")({sigint:true}); 
let number = prompt("Enter a number :");
let result = reverse(number);

