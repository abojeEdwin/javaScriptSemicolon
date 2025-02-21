const Shape  = require ("./shape.js");

class Rectangle extends Shape{
    #length;
    #breath;
    constructor(name,length,breath) {
        super(name);
        this.#breath = length;
        this.#length = breath;
    }

   getArea(length, breath) {
       return super.getArea(length, breath);
   }
   isSquare(length, breath) {
       return super.isSquare(length, breath);
   }


}
let rectangle = new Rectangle();
rectangle.name = "rectangle";
let area = rectangle.getArea(4,4)
console.log("The area of the shape is "+area+"cm")
let issquare = rectangle.isSquare(2.2,2.2)
console.log(issquare)