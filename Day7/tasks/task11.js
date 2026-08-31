const studentData = {
  name: "Mo'men",
  age: 20,
  city: "Mansoura"
};

studentData.age = 21;
console.log("after changing age: " + JSON.stringify(studentData));

studentData.grade = "A+";
console.log("after adding grade: " + JSON.stringify(studentData));

delete studentData.city;
console.log("after deleting city: " + JSON.stringify(studentData));

try {
  studentData = { name: "Ali", age: 25 };
} catch (err) {
  console.log("error: " + err.message);
}
