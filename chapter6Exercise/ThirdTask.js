function reverse(number){
        let lastDigit = number % 10
        let dummyValue = Math.floor(number / 10)
        let secondDigit = dummyValue % 10
        let firstDigit = Math.floor(dummyValue / 10)
        console.log(lastDigit+""+ secondDigit +""+firstDigit)
};
let number = 234;
let result = reverse(number);


function isPalindrome(number){
        let lastDigit = number % 10
        let dummyValue = Math.floor(number / 10)
        let middleDigit = dummyValue % 10
        let firstDigit = Math.floor(dummyValue / 10)
        
        if(firstDigit == lastDigit){
            console.log("True")
            }else{
                console.log("False")
                }
};
let number2 = 579;
let result2 = isPalindrome(number2);
