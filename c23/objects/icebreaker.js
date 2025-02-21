function icebreaker(arr){

    let result =  arr.map(number => {
        if(number % 2 == 0){
            number = 0
        }else number = 1
        return number
    });
    return result;

}

console.log(icebreaker([4,5,8,8,8,2,9]))
