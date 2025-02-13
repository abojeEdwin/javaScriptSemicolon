const{ request,} = require("./firstTask.js");

let student = {
    name: "John doe",
    age : 22,
    courses: ["Math","Physics","Computer Science"],
    address:{
        city: "New York",
        zip: 10001,
    }
}


test("Student returns the name",()=>{
    let check = request(student);
    let answer ="Name : John doe";
    expect(check).toBe(answer);
})




