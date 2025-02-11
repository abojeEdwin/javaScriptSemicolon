let student = {
    name: "John doe",
    age : 22,
    courses: ["Math","Physics","Computer Science"],
    address:{
        city: "New York",
        zip: 10001,
    }
}


function request(student){
    return("Name : " + student["name"]);
}

request(student);
console.log(request(student));

module.exports = {request,};
