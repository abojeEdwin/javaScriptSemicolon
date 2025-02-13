const shoppingCart = [ {name: 'Apple', category : 'Fruit', isHealthy : true},
                                                {name : 'Potatoes Chips', category : 'Snack', isHealthy : false},
                                                {name : 'Carrots', category : 'Vegetable', isHealthy : true},
                                                {name : 'Chocolate Bars', category : 'Sweets', isHealthy : false},
                                                {name : 'Greek Yogurt', category : 'Diary', isHealthy : true},
                                                {name : 'Soda', category : 'Beverages', isHealthy : false},]
let healthyItems = []

let unHealthyItems = shoppingCart.filter((item) => item.isHealthy === false)
console.log(unHealthyItems);

shoppingCart.forEach((item) => {
    if(item.isHealthy === true) {
        healthyItems.push(item)
    }
})
console.log(healthyItems);
