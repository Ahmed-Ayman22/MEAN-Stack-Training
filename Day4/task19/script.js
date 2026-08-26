const cities = ["Cairo", "Giza", "Alex", "Aswan"];

const city = cities.find(city => city.startsWith("A"));
const index = cities.findIndex(city => city.startsWith("A"));

console.log(city);
console.log(index);
