const mounth = ['Jan', 'March', 'April', 'June']
mounth.splice(1, 0, 'Fab')
// console.log(mounth)

mounth.splice(4, 1, 'May')
// console.log(mounth)

mounth.splice(1, 1)
// console.log(mounth)

const fruit = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']
// delete
fruit.splice(1, 2)
console.log(fruit)
//add
fruit.splice(2, 0, 'mango', 'bamboo')
console.log(fruit)
//replace
fruit.splice(2, 1, 'sugarcane')
console.log(fruit)
