function getPassingNames(students) {
  return (studentscore = students.filter(
    (student) => student.name.toLowerCase() === 'david' && student.score >= 80
  ))
}
const studentScorees = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'DAVID', socre: 79 },
  { name: 'Charline', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
  { name: 'david', score: 85 }
]
const passingName = getPassingNames(studentScorees)
console.log(passingName)
