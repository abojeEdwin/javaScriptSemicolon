function getDoubledNumbers(arraysofNumbers) {
    let doubledNumbers = [];
    arraysofNumbers.forEach(element => {
        let result = element * 2;
        doubledNumbers.push(result);
    })
    return doubledNumbers;
}

function getEvenNumbers(arraysofNumbers){
    let evenNumbers = [];
    arraysofNumbers.forEach(element => {
        if(element % 2 == 0){
            evenNumbers.push(element);
        };
    });
    return evenNumbers;
}

function getOddNumbers(arraysofNumbers){
    let oddNumbers = [];
    arraysofNumbers.forEach(element => {
        if(element % 2 != 0){
            oddNumbers.push(element);
        }
    })
    return oddNumbers;
}

module.exports = {getDoubledNumbers, getEvenNumbers, getOddNumbers};