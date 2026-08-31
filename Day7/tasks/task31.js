const createCard = (title, price = 0, ...tags) => {
  return {
    title,
    price,
    tags,
    label: `${title} - ${price} EGP`
  };
};

const firstCard = createCard("Laptop", 15000, "tech", "computer", "portable");
const secondCard = createCard("Mouse", 300, "electronics", "computer");

console.log("first card: " + JSON.stringify(firstCard));
console.log("second card: " + JSON.stringify(secondCard));
