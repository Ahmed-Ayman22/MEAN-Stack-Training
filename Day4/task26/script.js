const students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];

const names = students
  .filter(student => student.grade >= 80)
  .map(student => student.name);

console.log(names);
