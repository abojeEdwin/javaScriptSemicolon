const company = {
     name : "TechCorp",
    location : "San Francisco",
    employee : [firstEmployee = { id : 1 , name :"Edwin", department : "Engineering"},
                secondEmployee = { id : 2 , name :"Sam", department : "HR"},
                thirdEmployee = { id : 3 , name :"jack", department : "Marketing"}
                ]
}
console.log(company.name + "\n" + company.location);
console.log(company.employee[1]["name"]);
for(const item of company.employee){
    console.log("Name :" + item["name"] + "\n" + "Department :" + item["department"]);
}