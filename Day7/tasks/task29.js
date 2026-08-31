const user = { name: "Ahmed", age: 26, city: "Alex" };

localStorage.setItem("userdata", JSON.stringify(user));

const retrievedString = localStorage.getItem("userdata");
const parsedData = JSON.parse(retrievedString);

console.log("parsed data type: " + typeof parsedData);
console.log("name: " + parsedData.name + ", age: " + parsedData.age + ", city: " + parsedData.city);

localStorage.removeItem("userdata");
