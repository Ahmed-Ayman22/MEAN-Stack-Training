const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "white"
};

delete car.year;

console.log(car.year);
console.log("The result is undefined because the year property was deleted.");
