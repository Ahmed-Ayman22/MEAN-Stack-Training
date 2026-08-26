const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 25 }
];

const total = products.reduce((sum, product) => sum + product.price, 0);

console.log(total);
