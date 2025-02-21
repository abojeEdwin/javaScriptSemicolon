const Human = require("./class");

class Person extends Human{
    #gender;
    #height;
    #weight;
    #haircolour

    constructor(name,age,gender,height,weight,haircolour) {
        super(name,age);
        this.#gender = gender;
        this.#height = height;
        this.#haircolour = haircolour
        this.#weight = weight;
    }
    get gender(){
        return this.#gender
    }
    get height(){
        return this.#height
    }
    get haircolour(){
        return this.#haircolour
    }

    speak(){
        return "shouting";
    }
}

let personOne = new Person("Edwin",12,"Male","6'5","65kg","Black");
console.log(personOne.gender)
console.log(personOne.haircolour)
console.log(personOne.speak())