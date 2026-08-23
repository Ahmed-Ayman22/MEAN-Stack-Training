let productName = prompt("Enter product name:");
let brand = prompt("Enter brand:");
let price = prompt("Enter price:");
let category = prompt("Enter category:");
let inStock = confirm("Is this product in stock?");
price = Number(price);
let productInfo = {
productName: productName,
brand: brand,
price: price,
category: category,
inStock: inStock
};
let message = `Product Card => Name: ${productName} | Brand: ${brand} | Price: ${price} | Category: ${category} | In Stock: ${inStock}`;
alert(message);
console.log(message);
console.log(productInfo);
document.getElementById("result").innerText = message;
console.log("First character:", productName[0]);
