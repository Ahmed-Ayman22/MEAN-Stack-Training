let total = 0;

for (let i = 1; i <= 5; i++) {
  let expense = Number(prompt(`Enter expense for day ${i}:`));
  total += expense;
}

let average = total / 5;

console.log("Total =", total);
console.log("Average =", average);
