let arr = ['g','e','s','u','a']
console.log('---------------------')
console.log(arr)
console.log('---------------------')
   arr.splice(1,2, "z",'john') 
console.log('spliceadd',arr)

console.log('---------------------')
console.log(arr)
console.log('---------------------')
   arr.splice(arr.length - 2) 
   console.log('removedItems',  arr.splice(arr.length - 2) )
console.log('splicedelete',arr)