import http from 'http';
import fs from 'fs';

// const d = async()=>{
//      try{ 
//         const user = await User.findById({_id:123})
//      }catch(err){
//         console.log(err)
//      }
// }

const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type": "plain/text"})
        const txt = fs.readFileSync('message.txt', 'utf8');
        res.end(txt)
     }
     
     if(req.url === '/readFile'){
        res.writeHead(200, {"Content-Type": "plain/text"})
        fs.readFile('message.txt', (err, data)=> {
              if(err) throw Error('Something went wrong')
  
              res.end(data)
        })
     }
})

const port = 5000;
const host = '127.0.0.1'

server.listen(port, host,(err)=> {
    if(err){
        console.log(err)
    }

    console.log('server is running')
})