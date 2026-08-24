let correctPin = "1234";
let attempts = 0;
let pin;

while (attempts < 3) {
  pin = prompt("Enter PIN:");
  attempts++;

  if (pin === correctPin) {
    console.log("Login successful");
    break;
  }
}

if (pin !== correctPin) {
  console.log("Login failed");
}
