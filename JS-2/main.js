function getPassingNames(students) {
  return (studentscore = students
    .filter((student) => student.score >= 70)
    .map((student) => student.name.toUpperCase()))
}
const studentScorees = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charline', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 }
]
const passingName = getPassingNames(studentScorees)
console.log(passingName)