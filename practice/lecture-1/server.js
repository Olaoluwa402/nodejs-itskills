import http from 'http'
import fs from 'fs'

//set host
const host = '127.0.0.1';
//set port
const port = 3000

// send html
const server = http.createServer((req,res)=>{
      //serve plain text
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
            const text = 'This is the server sending a text data'
            res.write(text) //serve string
            res.end()
    }

    if(req.url === '/html'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        //read the file to be sent using fs(filesystem)
        fs.readFile('index.html', 'utf8', (err, data)=>{
                if(err){
                        throw err
                }
                console.log(data)
                res.write(data)
                res.end()
        })
    }

    if(req.url === '/json'){
        res.writeHead(200, {'Content-Type': 'Application/json'})
        const data = {
            status:'success',
            message:'This is a json data',
            data:[1,2,3,4,5,6,6,7]
        }

        console.log(JSON.stringify(data))
        res.end(JSON.stringify(data))
    }

    if(req.url === '/get-pdf'){
        res.writeHead(200, {'Content-Type': 'application/pdf'})
       fs.readFile('doc.pdf', (err, result)=>{
            if(err){
                console.log(err)
                res.write({
                    status:'error',
                    message:err
                })
                res.end()
            }

            console.log(result)
            res.write(result)
            res.end() 

       })
    }

    if(req.url === '/get-mp3'){
        res.writeHead(200, {'Content-Type': 'audio/mp3'})
        fs.exists('music/audio.mp3', (exists)=> {
            if(exists){
                const rstream = fs.createReadStream("music/audio.mp3")
                rstream.pipe(res)
            }

            res.write('Not found')
            res.end()
        })
    }

    if(req.url === '/get-mp4'){
        res.writeHead(200, {'Content-Type': 'video/mp4'})
        fs.exists('video.mp4', (exists)=> {
            if(exists){
                const rstream = fs.createReadStream("video.mp4")
                rstream.pipe(res)
            }

            res.write('Not found')
            res.end()
        })
    }


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