function sumDigits(number){
        let lastDigit = number % 10
        let dummyValue = Math.floor(number / 10)
        let secondDigit = dummyValue % 10
        let firstDigit = Math.floor(dummyValue / 10)
        console.log(firstDigit+secondDigit+lastDigit)
    
    };
    
    let number = 234;
    let result = sumDigits(number);
