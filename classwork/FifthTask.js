const person = {
                firstName : "Edwin",
                lastName : "Aboje",
        
                fullName : function(){
                    return this.firstName + "\n" + this.lastName;
                    }
                };
                console.log(person.fullName());
