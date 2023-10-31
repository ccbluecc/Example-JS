//3.create object by using Class
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  distance(anotherPoint) {
    return Math.sqrt(
      (this.x - anotherPoint.x) ** 2 + (this.y - anotherPoint.y) ** 2
    )
  }
}
// const p1 = new Point(10, 30)
// const p2 = new Point(5, 4)
// console.log(p1.distance(p2))

//3.create object by using Class
//javascript is a property based,not class based
//Syntactic sugar
class Circle {
  constructor(r) {
    this.radius = r
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2)
  }
  getRadius() {
    return this.radius
  }
}
const c1 = new Circle(2)
const c2 = new Circle(3)
const c3 = new Circle(4)
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c1.area())
console.log(c1.getRadius())

const test = {}
if (Object.keys(test).length === 0) {
  console.log('True')
}
