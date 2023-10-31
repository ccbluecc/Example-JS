class Person {
  constructor(firstname, lastname, dateOfbirth) {
    this.firstname = firstname
    this.lastname = lastname
    this.dateOfbirth = dateOfbirth
  }

  getFullName() {
    return `${this.lastname},${this.firstname}`
  }
  getAge() {
    let Dnow = Date.now()
    let Dtime = this.dateOfbirth.getTime()
    let DDiff = Dnow - Dtime
    const DDdate = new Date(DDiff)
    return DDdate.getFullYear() - 1970
  }
  isEqual(anotherPerson) {
    return (
      this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() &&
      this.lastname.toLowerCase() === anotherPerson.lastname.toLowerCase()
    )
  }
  toString() {
    return `${this.getFullName()}, ${this.getAge()}}`
  }
}
const p1 = new Person('Umaporn', 'Juntra', new Date(1900, 8, 23))
const p2 = new Person('Umaporn', 'Juntra', new Date(1908, 8, 23))
console.log(p1.isEqual(p2))
console.log(p1.getAge())
console.log(p2.getAge())
