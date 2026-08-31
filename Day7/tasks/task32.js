const classStudents = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];

classStudents.forEach(({ name, grade }) => {
  console.log(name + " scored " + grade);
});
