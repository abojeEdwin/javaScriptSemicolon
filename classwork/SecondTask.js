const car = {
            make : "Toyota", 
            model : "Camry", 
            year : 2021
            };

function carProperties(car){
    for (const property in car){
        console.log(`${property}: ${car[property]}`)
    }
        };
        
   let result = carProperties(car);     
