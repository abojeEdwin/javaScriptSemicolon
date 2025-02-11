const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};
    for(const keys in inventory) {
        console.log([keys] + ": "  + inventory[keys]);
    }

//console.log(`${keys}: ${inventory[keys]}`)
let total = 0;
for(let keys in inventory){
  sum = total += inventory[keys];
}
console.log(sum);