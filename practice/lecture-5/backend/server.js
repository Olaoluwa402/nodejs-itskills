import express from 'express'
const app = express()
import qs from 'querystring';


app.get('/', (req,res)=>{
  console.log('url',req.originalUrl)
    const str_1 = req.url  //'q=10&name=Bruce'
    // parse str to a useable key:value object
    const qsParse_1 = qs.parse(str_1);
    console.log('qsParse_1',qsParse_1)

 console.log('sliced',req.url.slice(req.url.indexOf('?') + 1))
    const str_2 = req.url.slice(req.url.indexOf('?') + 1) //'q%15#name%John'
    // parse str to a useable key:value object
    const qsParse_2 = qs.parse(str_2, '#', '%');
    console.log('qsParse_2',qsParse_2)
    res.send('Working')
})

//working with query string of a URL using URLSearchParams
app.get('/search', (req,res)=>{
  console.log('url',req.url)
    
  //get ecerything after the ? mark of  aURL
   console.log('sliced',req.url.slice(req.url.indexOf('?') + 1))
    const str = req.url.slice(req.url.indexOf('?') + 1) //'q%15#name%John'

    const searchParams = new URLSearchParams(str)
    console.log(searchParams)
    for(const p of searchParams){
        console.log('searchParams',p)
    }

    //has method
    console.log(searchParams.has('user'))
    res.send('Working')
})



										
app.listen(4000, ()=> console.log('server'))
