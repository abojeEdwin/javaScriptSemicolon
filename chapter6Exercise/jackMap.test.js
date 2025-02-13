const {jackMap} = require("./JackMap.js");

test('Returns square', ()=>{
    let result = jackMap(number);
    let answer = [ 4, 16, 36, 64, 100];
    expect(result).toEqual(answer);
})