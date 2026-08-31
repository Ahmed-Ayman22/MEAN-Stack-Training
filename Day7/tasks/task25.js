const arrayValues = [2, 4, 6, 8];

function totalValues(a, b, c, d) {
  return a + b + c + d;
}

console.log("total: " + totalValues(...arrayValues));
