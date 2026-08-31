const greet = (name = "Guest", message = "Hello") => `${message}, ${name}!`;

console.log(greet("Ali", "Welcome"));
console.log(greet("Sara"));
console.log(greet());
