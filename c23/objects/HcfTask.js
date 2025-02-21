let arr = [9,9,15]
function HCF(){
    let divisor = 1;
    for(let i = 1; i<= Math.min(...arr); i++){
        if(arr.every(num=> num % i === 0)){
            divisor = i
        }
    }
    return [divisor,divisor];
}
console.log(HCF(arr))