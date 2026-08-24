let n = Number(prompt("Enter a number:"));

if (n < 0) {
  console.log("Invalid number");
  alert("Invalid number");
} else {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  console.log(`${n}! = ${factorial}`);
  alert(`${n}! = ${factorial}`);
}
