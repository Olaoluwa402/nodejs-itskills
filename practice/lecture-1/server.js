import http from 'http'
import fs from 'fs'

//set host
const host = '127.0.0.1';
//set port
const port = 3000

// send html
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    //read the file to be sent using fs(filesystem)
    fs.readFile('index.html', (err, data)=>{
            if(err){
                    throw err
            }
           
            console.log(data)
            res.write(data)
            res.end()
    })
})

//create server and string
// const server = http.createServer((req,res)=>{
    
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     const text = 'This is the server sending a text data'
//     res.write(text) //serve string
//     res.end()
// })

//create server
// const server = http.createServer((req,res)=>{
    
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     const text = 'This is the server sending a text data'
//     res.end(text)
// })

//set server to listen for incoming request
server.listen(port, host, (err)=> {
    if(err){
        console.log('Something went wrong with the server')
    }

    console.log(`Server is running on ${host} and listening on ${port}`)
})