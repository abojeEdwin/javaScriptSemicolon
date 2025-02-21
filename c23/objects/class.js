class Human{
    #age;
    #name;
    constructor(name,age){
        this.#name = name;
        this.#age = age;
    }


    set firstName(name){
        this.#name = name;
    }
     get firstName(){
        return this.#name;
     }

     speak(){
        return "Speaking"
     }

}
module.exports = Human;