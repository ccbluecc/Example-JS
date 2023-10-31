const p1 = { personId: 101, firstname: 'Joity', lastname: 'Teerakorn' }
const student = Object.create(p1)
student.studentID = 65130500045
console.log(p1)
console.log(student)
console.log(student.studentID)
console.log(student.personId)
console.log(student.firstname)
console.log(student.lastname)
console.log(Object.prototype.isPrototypeOf(student))