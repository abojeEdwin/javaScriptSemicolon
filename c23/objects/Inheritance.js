let animal = {
    name : "unknown",
    colour : "",
   animalSound :  "",
    sound : function (){
        return `${this.name} makes ${this.animalSound} a sound`;
    }
};


let dog = Object.create(animal)
dog.name = "Ruby";
dog.colour = "Brown";
dog.sound("bark")
dog.animalSound = "barking"
console.log(dog.sound())
console.log(dog)

let cat = {}
Object.setPrototypeOf(cat,animal)
cat.name = "Ginger";
cat.colour = "Brown";
cat.animalSound = "Meowing";
console.log(cat.sound());