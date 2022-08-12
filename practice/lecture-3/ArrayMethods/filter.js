let arr = [2,4,6,8,10]
let arr1 = [1,2,3,4,5,6,7,10]

const even = (value)=> {
     if(value % 2 === 0){
        return true
     }else{
        return false
     }
}

console.log(arr.filter(even))
console.log(arr1.filter(even))