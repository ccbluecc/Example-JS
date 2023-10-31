//1.create object with object literals
const student = { id: 6513050000, firstname: 'Somchai', lastname: 'Jaidee' }
// console.log(student)
const std2 = {}
// console.log(typeof std2)
// console.log(Object.keys(student)) //array of property key
// console.log(Object.values(student)) //array of property value
// console.log(typeof student)
// console.log(Object.prototype.isPrototypeOf(student))
// console.log(Date.prototype.isPrototypeOf(student))

const lecturer = { id: 1001, firstname: 'Umaporn', lastname: 'Juncta' }
// console.log(Object.prototype.isPrototypeOf(lecturer))

// way to property value
const someoneId = student.id //object.key
const someoneName = student['firstname'] //object["key"]
// console.log(someoneId)
// console.log(someoneName)

// way to assign /set property value
student.id = 6513000001
student['firstname'] = 'judirane'
// console.log(student.id)
// console.log(student['firstname'])

// composite object : address object is nested in std4 object
const std4 = {
  firstname: 'Pornthai',
  lastname: 'youid',
  studentId: '6530504497',
  address: { province: 'Bankoko', country: 'Thailand' },
  getFullName: function () {
    return `${this.firstname} ${this.lastname}`
  }
}
console.log(std4['address']['country'])
console.log(std4.getFullName())
// get property 1) objectname.property 2)object["propertykey"]
console.log(std4.firstname)
console.log(std4['lastname'])
// dynamic property: add a new one , update of delete existing property
std4.email = 'Giopun@gmail.com'
std4.firstname = 'Supakorn'
delete std4.email
std4.getAddress = function () {
  //add new property that store function
  return this.address
}
console.log(std4)
// property value can store funtions
const std5 = {
  firstname: 'Thimaporn',
  lastname: 'Moonnight',
  studentId: '6501579952',
  getFullName: function () {
    return `${this.firstname} ${this.lastname}`
  }
}
// console.log(std5)

// dynamic properties
// add dynamic
student['email'] = 'Somkuy@gmail.com'
student.address = 'Bangkok, Thailand'
// console.log(student)

// delete existing property
delete student.address
// console.log(student)

student.advisor = lecturer
// console.log(student)

// console.log(student.advisor.firstname)
// console.log(student['advisor']['firstname'])

//function declaration
function doSomething() {}
//function expression
student.getFullName = function () {
  return `${this.firstname} ${this.lastname}`
}
// console.log(student.getFullName) // get property value of getFullName
// console.log(student.getFullName()) // execute function getFullName()

const student2 = { id: 555, firstname: 'Sude', lastname: 'Jedi' }
student2.getFullName = function () {
  return `${this.firstname} ${this.lastname}`
}
// console.log(student2.getFullName()) // execute function getFullName()
