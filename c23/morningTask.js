let number = [3,4,2];
function addDigits(number) {
    for (let i = number.length - 1; i >= 0; i--) {
        if (number[i] < 9) {
            number[i]++;
            return number[i];
        }
        number[i] = 0
    }
    number.unshift(1)
    return number;
}
console.log(addDigits(number));