import express from 'express'
const app = express()

//NODE Timers Mopdule - Methods and clear methods
app.get('/', (req,res)=>{
    //setImmediate
    function sayHi(){
        console.log('This will be called immediately')
    }
     const immediate = setImmediate(sayHi)
     clearImmediate(immediate)
  

     //setInterval
     function sayHi(){
        console.log('This will be called fter the delay time')
    }
     const interval = setInterval(sayHi, 2000)
     clearInterval(interval)

      //setInterval
      function sayHi(){
        console.log('This will be called only once after the delay time')
    }
     const timeout = setTimeout(sayHi, 2000)
     clearTimeout(timeout)
    res.send('Working')
}) 
							
app.listen(4000, ()=> console.log('server'))
