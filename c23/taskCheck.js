function Arrays(arr){
    let newArray = []
    let result = arr.map(character => {if(character == 'X'){
        character = 1
        return character
    }else
        character = 0
        return character;
    });
    return result;
}
let arr =[
        ['X','0','X'],
        ['X','O','X']
        ]
console.log(Arrays(arr))

