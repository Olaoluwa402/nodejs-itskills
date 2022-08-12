// 1. using square bracket []
let ab = ['john','Bayo', false, 3, ["mmango", 'Orange'], {name:'john'}]
console.log(ab[5].name)
   let len = ab.length
   console.log(len);

//2. using the Array class constructor
const newArr = new Array(3); // creates an empty array of size 3
console.log(newArr)

const anotherArr = new Array(1,2,3,false,{name:'john'},[1,2,3])
console.log(anotherArr)