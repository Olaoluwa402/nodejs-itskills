console.time('division')
let x = 10;
let y = 20;
let result = x/y;

if(result == 2){
    console.log('The resultn is: %d', result)
}else{
    console.error('Error: Error is due to operand positioning')
}

// for(let i = 0; i < 10000000000; i++){
//     console.log(i)
// }
console.timeEnd('division')