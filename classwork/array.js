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
const isOdd = (number)=>{
    let answer = number % 2 != 0;
    return answer;
};

function getOddNumbers(arraysofNumbers){
    return arraysofNumbers.filter(isOdd);
}

function addThreeNumbers(numbers){
    let result = numbers.map((number) => (number + 3));
    return result;
}

module.exports = {getDoubledNumbers, getEvenNumbers, getOddNumbers,addThreeNumbers};