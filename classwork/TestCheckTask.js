function numberOf(arr){
    const dic = {}
    for(let index in arr){
        let count = 0;
        for(let index2 in arr){
            if(arr[index] == arr[index2]) count++;      
        }
        dic[arr[index]] = count
    }
    return dic;
}


let array = [2,1,2,4,4,5,7,7,7,7,7]

console.log(numberOf(array));
