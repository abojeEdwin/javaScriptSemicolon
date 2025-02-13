const {jackSchedule} = require("./JackSchedule");

let schedule = ["9:00 AM","11:00 AM","1:00 PM","3:OO PM","5:00 PM"];

test('returns correct timing', ()=>{
    let result = jackSchedule(schedule);
    let answer = ['1:00 PM','3:OO PM','5:00 PM'];
    expect(result).toEqual(answer);
})