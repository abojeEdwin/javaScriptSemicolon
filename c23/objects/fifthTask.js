const company = {
     name : "TechCorp",
    location : "San Francisco",
    employee : [firstEmployee = { id : 1 , name :"Edwin", department : "Engineering"},
                secondEmployee = { id : 2 , name :"Sam", department : "HR"},
                thirdEmployee = { id : 3 , name :"jack", department : "marketing"}
                ]
}
for(const comp in company){
    for(const item in company[comp]){
        console.log(company[comp]);
    }
}
//console.log(company.name)
//console.log(company.department);
//console.log(company.name + "\n" + company.location);
//console.log(company.employee[1]["name"]);