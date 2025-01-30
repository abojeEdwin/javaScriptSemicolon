function multiply(numberOne, numberTwo){
    let result = numberOne * numberTwo;
    if(numberOne <=0 || numberTwo <= 0){
        console.log("Wrong input");
        }
    return result;
};
module.exports = multiply;
