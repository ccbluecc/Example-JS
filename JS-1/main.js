function findminmaxavg(array) {
  if (array?.length === 0 || array === null || array === undefined) return false
  let sum = 0
  let avg = 0
  let max = Math.max(...array)
  let min = Math.min(...array)
  for (let index = 0; index < array.length; index++) {
    sum = sum + array[index]
  }
  avg = sum / array.length
  let obj = { max, min, sum, avg }
  return obj
}
console.log(findminmaxavg([1, 2, 3, 4, 5]))
console.log(findminmaxavg([]))
