let student = {
    name: "John doe",
    age : 22,
    courses: ["Math","Physics","Computer Science"],
    address:{
        city: "New York",
        zip: 10001,
    },
}
student["age"] = 23;
student["GPA"] = 3.8;

student  = function getDetails(){
    return "John Doe is 23 years old and has a GPA of 3.8."

}

console.log(student);
