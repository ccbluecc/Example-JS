// function declaration, name function
function sum(n1, n2) {
  return n1 + n2
}
// function expression, name annoymous function
const sum2 = function (n1, n2) {
  return n1 + n2
}
// function expression, name function
const sum3 = function sumfn(n1, n2) {
  //เรียกได้แค่ sum3 (ภายใน scope ตัวเอง)
  return n1 + n2
}
// arrow function, function expression, annoymous funtions
const sum4 = (n1, n2) => n1 + n2
// if arrow function have {} !!!Warning it has return
const sum5 = (n1, n2) => {
  n1 = n2
  n1 += n2
  return n1
}
console.log(sum5(1, 3))
console.log(sum(1, 1))
console.log(sum3(5, 10))
