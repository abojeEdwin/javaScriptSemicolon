const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};
    console.log(inventory);

let total = 0;
for(let keys in inventory){
   // console.log(inventory[key]);
  sum = total += inventory[keys];
}
console.log(sum);