import dotenv from 'dotenv'
dotenv.config()

import express from 'express';

const app = express()

app.get('/', (req,res)=>{
    res.send('Welcome dockerized backend project !!!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, function(err){
    if(err) console.log(err)
    console.log(`server started in ${process.env.NODE_ENV} on port ${PORT}`)
})