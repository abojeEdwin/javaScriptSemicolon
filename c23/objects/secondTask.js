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

 function getDetails(){
    console.log(student.name + " is "+ student.age + " years old " + "and has a CGPA of " + student.GPA);
}
getDetails();
 console.log(student);
