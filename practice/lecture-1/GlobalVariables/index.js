// __dirname - gives us the path to the current directory
console.log(__dirname)

// __filename - gives us the path to the current file
console.log(__filename)

//Require – function that allow us use modules(CommonJS)
import name from '../understandingModule/constants.js'
console.log(name)

//Module – info about current module (file)
console.log(module)

//Process – Info about environment where the program is being executed
console.log(process)

setInterval(()=> {
    console.log('hello')
}, 10000000000), 

setTimeout(()=> {
    console.log('hello')
}, 10000000000)

 