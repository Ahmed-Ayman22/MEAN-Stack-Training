const products = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 }
];

const titles = products.map(product => product.title.toUpperCase());

const cheapProducts = products.filter(product => product.price < 30);

const total = products.reduce((sum, product) => sum + product.price, 0);

console.log(titles);
console.log(cheapProducts);
console.log(total);
