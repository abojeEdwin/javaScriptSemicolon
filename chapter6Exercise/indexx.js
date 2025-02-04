function multiply(numberOne, numberTwo){
    let result = numberOne * numberTwo;
    if(numberOne <=0 || numberTwo <= 0){
        console.log("Wrong input");
        }
    return result;
};


function addTwoNumbers(numberOne, numberTwo){
    let result = numberOne + numberTwo;
    return result;
    };
    
function getOddNumbers(arr){
    let newArray = []
    let count = 0
    for(index in arr){
        console.log(index)
        if(arr[index] % 2 != 0){
            newArray[count++] = arr[index]
    }
    }
    return newArray;
    }    
module.exports = {multiply,addTwoNumbers,getOddNumbers};

