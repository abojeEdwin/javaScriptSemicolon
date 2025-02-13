let books = ["Great gatsby","Goodmorning holyspirit","Queen primer","Four agreement"]
let members = ["Emily","Jack","Sophia","Daniel"]
let newClub = {};

for(const [keys,value] of Object.entries(books)) {
    newClub[value] = members [keys];
}
console.log(newClub);