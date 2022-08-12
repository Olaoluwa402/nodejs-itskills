let arr = [2,4,6,8,10]
let arr1 = [2,3,4,5,6,7,10]

const odd = (value)=> value % 2 === 1? true : false

console.log(arr.find(odd))
console.log(arr1.find(odd))