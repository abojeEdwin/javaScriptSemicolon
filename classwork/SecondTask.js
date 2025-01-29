const car = {
            make : "Toyota", 
            model : "Camry", 
            year : 2021
            };

const carProperties = (car) =>{
    for (const property in car){
        console.log(`${property}: ${car[property]}`)
    }
        };
        
   let result = carProperties(car);     
