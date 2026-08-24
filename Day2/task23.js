let hasAccount = true;
let isVerified = false;

console.log(!hasAccount);
console.log(hasAccount || isVerified);
console.log(hasAccount && isVerified);

if (hasAccount && isVerified) {
  console.log("Welcome back");
} else if (hasAccount) {
  console.log("Please verify your account");
} else {
  console.log("Please sign up");
}
