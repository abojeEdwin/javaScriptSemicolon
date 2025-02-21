let loadedArray = [
    ['X','0','X'],
    ['X','0','X'],
    ['0','0','X']
]

for(let i = 0; i < loadedArray.length; i++){
    for(let j = 0; j < loadedArray[i].length; j++){
        if(loadedArray[i][j] === 'X'){
            loadedArray[i][j] = "1";
        }
    }
}
console.log(loadedArray);