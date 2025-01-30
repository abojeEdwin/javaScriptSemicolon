function reverse(number){
        let lastDigit = number % 10
        let dummyValue = Math.floor(number / 10)
        let secondDigit = dummyValue % 10
        let firstDigit = Math.floor(dummyValue / 10)
        console.log(lastDigit+""+ secondDigit +""+firstDigit)
};
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

