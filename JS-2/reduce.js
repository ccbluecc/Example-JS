const fruit = ['apple', 'mango', 'orange', 'pineapple']
const concat = fruit.reduce((detail, prop) => detail.concat(prop.charAt(0)), '')
console.log(concat)

const num = [1, 2, 3, 4, 5]
const multiple = num.reduce((multiple, num) => multiple * num)
console.log(multiple)

const sellProducts = [
  { id: 1, price: 100, sell: 5 },
  { id: 2, price: 50, sell: 2 },
  { id: 3, price: 25, sell: 10 }
]
const total1 = sellProducts.reduce(
  (total, price) => total + price.price * price.sell,
  0
)
console.log(total1)
