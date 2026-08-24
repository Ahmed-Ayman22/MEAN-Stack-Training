let size = Number(prompt("Enter file size:"));

if (size > 0) {
  for (let i = 1; i <= size; i++) {
    console.log(i);
  }
} else {
  console.log("Invalid file size");
}
