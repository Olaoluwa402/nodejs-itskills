let arr = ['g','e','s','u','a']
console.log('---------------------')
console.log(arr)
console.log('---------------------')
   arr.sort() //works for only alphabets
console.log('alphabetsort',arr)

let numArray = [10, 2,7,3,20,4]
console.log('---------------------')
console.log(numArray)
console.log('---------------------')
   numArray.sort((a,b)=> a-b) //works for numbers ascending order //descending (a,b)=> b-a
console.log('numbersort',numArray)
