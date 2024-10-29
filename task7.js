"use strict";
// Task 3: Use Type Annotations in Functions
// Create a Shopping Cart:
const data = [
    { id: 1, name: "skin care cream", price: 50 },
    { id: 2, name: "tea", price: 10 },
    { id: 3, name: "chai", price: 100 },
];
function addToCart(product, quantity = 5) {
    return `Added ${quantity} ${product.name} to the cart ${product.price * quantity} . `;
}
console.log(addToCart({ id: 1, name: "tea", price: 10 }));
