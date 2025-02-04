function countOf(arr){
    const obj = {}
    for(index in arr){
        let count = 0;
        for(let index2 in arr){
            if(arr[index] == arr[index2]) count++
        }
        obj[arr[index]]=count;
    }
    return obj;
}

let array = [1,2,3,4,4,6,7]
console.log(countOf(array));
