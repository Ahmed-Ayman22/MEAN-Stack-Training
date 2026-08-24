var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;

let total = a + b + Number(c) + d + e;

console.log(total);

if (total >= 20) {
  for (let i = 1; i <= total; i++) {
    console.log(i);
  }
} else {
  console.log("Too big to print line by line");
}
