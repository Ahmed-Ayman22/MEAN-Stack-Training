const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);

console.log("1 + 2 + 3: " + sumAll(1, 2, 3));
console.log("10 + 20 + 30 + 40: " + sumAll(10, 20, 30, 40));
