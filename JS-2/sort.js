const animal1 = ['ant', 'dog', 'cat', 'seacat', 'Bear', 'Bird']
animal1.sort()
console.log(animal1)

const num = [1, 10, 100, 2, 3, 50, 5]
num.sort((a, b) => a - b)
console.log(num)

const Person = [
  { id: 1, fullname: 'Susan Jo' },
  { id: 3, fullname: 'John Lee' },
  { id: 2, fullname: 'ann Smith' }
]

console.log(
  Person.sort((a, b) =>
    a.fullname.toLowerCase() > b.fullname.toLowerCase()
      ? 1
      : a.fullname.toLowerCase() < b.fullname.toLowerCase()
      ? -1
      : 0
  )
)
