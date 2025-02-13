const david = {"groceries":150,
                    "dining out": 100,
                    "transportation": 50,
                    "entertainment": 80
};
let total = 0;
for(const item in david) {
    total += david[item]
}
console.log("David's total amount spent is " + total);