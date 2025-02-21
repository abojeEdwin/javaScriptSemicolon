const {MyStack} = require("./MyStack")

    const myStack = new MyStack(6);

test("Test Stack can add Item", ()=>{

    let answer = 3;

    const myStack = new MyStack(6);
    myStack.addItem(14);
    myStack.addItem(23)
    myStack.addItem(24);
    let result = myStack.getSize();
    expect(result).toEqual(answer);

})

test("Test Stack is Empty", ()=>{
    const myStack = new MyStack(6);
    let result = myStack.isEmpty();
    let answer = true
    expect(result).toBe(answer);
})

test("Test Stack can remove item",()=>{

    let answer = 1;

    const myStack = new MyStack(6);
    myStack.addItem(14);
    myStack.addItem(23);
    myStack.pop()
    let result = myStack.getSize();
    expect(result).toBe(answer)
})

test("Test Stack can peek",()=>{
    let answer = 3;
    const myStack = new MyStack(6);
    myStack.addItem(14);
    myStack.addItem(23);
    myStack.addItem(3);
    let result = myStack.peek()
    expect(result).toBe(answer)
})

test("Test Stack contains an item",()=>{
    let answer = false;
    const myStack = new MyStack(6);
    myStack.addItem(3);
    myStack.addItem(2);
    myStack.addItem(4);
    let result = myStack.contains(42);
    expect(result).toEqual(answer)
})

test("Test Stack can check size",()=>{
    let answer = 3;
    const myStack = new MyStack(6);
    myStack.addItem(2);
    myStack.addItem(4);
    myStack.addItem("Here we go");
    let result = myStack.getSize();
    expect(result).toEqual(answer)
})