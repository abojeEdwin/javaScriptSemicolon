class MyStack{
    #size
    #top
    #stack
    #capacity

    constructor(size){
        this.#size = 0;
        this.#top = 0;
        this.#stack = [];
        this.#capacity = size;

    }
    addItem(value){
        this.#stack[this.#top] = value;
        this.#size ++
    }

    pop(){
        this.#top --;
        this.#stack[this.#top] = null
        this.#size--;
    }

    getSize() {
        return this.#size;
    }
    getstack() {
        return this.#stack;
    }

    isEmpty() {
        return this.#size === 0;
    }

    peek() {
        for(let i = 0; i < this.#stack.length; i++){
            return(this.#stack[i]);
        }
        console.log(this.#stack);
    }

    contains(value) {
        for(let i in this.#stack){
            if(this.#stack[i] === value) {
                return true;
            }
            return false;
        }
    }
}

module.exports = {MyStack,};