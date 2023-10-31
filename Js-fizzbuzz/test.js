// 2.create object with constructor function
function Person(id, firstname, lastname) {
  this.id = id
  this.firstname = `${firstname},${lastname}`
}
const p1 = new Person(111, 'Moi', 'Hedia')
const p2 = new Person(112, 'Yue', 'Smith')
const p3 = new Person(113, 'Qi', 'Dam')

console.log(p1)
console.log(p2)
console.log(p3)
p1.email = 'Korkanok@gmail.com'
console.log(p1)
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Object.prototype.isPrototypeOf(p2))
// Object  property <-- Person property <-- p3
console.log(Object.prototype.isPrototypeOf(p3))
console.log(Person.prototype.isPrototypeOf(p3))
console.log(Date.prototype.isPrototypeOf(p3))

class Student {
  constructor(id, fn, ln) {
    this.id = id
    this.firstname = fn
    this.lastname = ln
  }
  getFullname() {
    return `${this.firstname} ${this.lastname}`
  }
}
//st1 object --> Student property  --> Object property (Ancestor)
const st1 = new Student(1, 'Pethe', 'Jo')
const st2 = new Student(2, 'Kedo', 'Teie')
console.log(st1)
console.log(st2)
console.log(st1.getFullname())
console.log(st2.getFullname())
console.log(Object.prototype.isPrototypeOf(st1)) //true
console.log(Student.prototype.isPrototypeOf(st2)) //true

const undergratSt1 = Object.create(st1)
undergratSt1.id = 65130500088
console.log(undergratSt1)
console.log(undergratSt1.id)
console.log(undergratSt1.firstname)
console.log(undergratSt1.lastname)
console.log(Object.prototype.isPrototypeOf(undergratSt1)) //true
console.log(Student.prototype.isPrototypeOf(undergratSt1)) //true
undergratSt1.project = 'Web Application'
console.log(undergratSt1)
