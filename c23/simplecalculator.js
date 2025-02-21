let firstnumber = 30;
let secondnumber = 40;

function Calculator (){
    this.multiplication = function(num1, num2){
         return(num1*num2)
    };

}

let calculator = new Calculator();
let result = calculator.multiplication(firstnumber, secondnumber);
console.log("Your answer is " + result);