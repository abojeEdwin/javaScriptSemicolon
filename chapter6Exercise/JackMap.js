let number = [2,4,6,8,10]
function jackMap(number) {
    let result = number.map(number => (number ** 2));
    return result;
}
console.log(jackMap(number));
module.exports = {jackMap};