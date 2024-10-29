// Task 3: Use Type Annotations in Functions
// Create a Shopping Cart:

// Define an interface Product with properties id, name, and price.
// Write a function addToCart that takes a Product and an optional quantity (default to 1) and logs the product details.
// Calculate Total Price:

interface Product {
  id: number;
  name: string;
  price: number;
}
const data: Product[] = [
  { id: 1, name: "skin care cream", price: 50 },
  { id: 2, name: "tea", price: 10 },
  { id: 3, name: "chai", price: 100 },
];
function addToCart(product: Product, quantity: number = 5): string {
  return `Added ${quantity} ${product.name} to the cart ${
    product.price * quantity
  } . `;
}
console.log(addToCart({ id: 1, name: "tea", price: 10 }));
