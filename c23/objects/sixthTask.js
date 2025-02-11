const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Desktop", price: 700 }
];

function findExpensiveProduct(products, threshold) {
    let newProducts = [];
    for(const product of products) {
        if (product.price >= threshold) {
            newProducts.push(product);
        }
    }
    return newProducts;
}

console.log(findExpensiveProduct(products, 700));