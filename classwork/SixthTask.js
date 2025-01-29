const person = {
        firstName: "john",
        lastName: "doe",
        age : 19
    };
    
const personInfo = (person) =>{
        result = " "
        for (key in person){
            result += " "+ key +": "+ person[key] + ", "
            };
            console.log(result);
            };
            
            personInfo(person);
