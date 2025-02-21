class Shape{
    #name;
    constructor(name) {
        this.#name = name;
    }
    get name(){
        return this.#name;
    }

    getArea(length,breath){
        return length * breath;
    }

    isSquare(length,breath){
        if(length == breath ){
            return true;
        }
        return false;
    }
}
module.exports = Shape;