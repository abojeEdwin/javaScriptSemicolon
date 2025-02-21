function Superhero(name,species,strength){
        this.name = name
        this.species = species
        this.strength = strength

        this.describe = function(){
                return `${this.name} is a ${this.species} Superhero with a ${this.strength} strength`
        }
}

let batman = new Superhero("Bruce Wyne","Human","Billionaire");
//batman.name = "Bruce";
//console.log("The name of this hero is " + batman.name + " and he is a " + batman.species);
console.log(batman.describe())

