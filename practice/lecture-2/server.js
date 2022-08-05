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
  
    // synchronous
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type": "plain/text"})
        const txt = fs.readFileSync('message.txt', 'utf8');
        res.end(txt)
     }
     
    //  asynchronouys
     if(req.url === '/readFile'){
        res.writeHead(200, {"Content-Type": "plain/text"})
        fs.readFile('message.txt', (err, data)=> {
              if(err) throw Error('Something went wrong')
              res.end(data)
        })
     }
       
    //  asynchronous
     if(req.url == '/writeFile'){
        res.writeHead(200, {"Content-Type":"application/json"})
        const txt = 'this is for write file fs module asynchronous nenw nnghghg'
        fs.writeFile('writefile.txt', txt, (err, data)=> {
                if(err) throw err;

                console.log(data)
                res.end('Successfull')
        })
     }

    //  synchrous
    if(req.url === '/writeFileSync'){
        res.writeHead(200, {"Content-Type":"application/json"})
        const txt = 'this is for write file fs module synchronous'
        fs.writeFileSync('writefilesync.txt', txt)
        res.end('successful')
    }

     if(req.url === '/copy'){
        res.writeHead(200, {"Content-Type":"plain/text"})
        fs.readFile('writefile.txt', 'utf8', (err, result)=> {
            if(err) throw err
            const copy = result;

            fs.writeFileSync('copy.txt', copy)

            res.end('successfully copied')
        })
     }

    //  appendFile asynchronous
     if(req.url === '/appendFile'){
        res.writeHead(200, {"Content-Type":"plain/text"})

        const raw = '\n This should go to the next line new line '
        fs.appendFile('writefile.txt', raw, (err)=>{
            if(err) throw err

            res.end('successfully appended')
        })
     }

    //  apendFileSynchronous
    if(req.url === '/appendFileSync'){
        res.writeHead(200, {"Content-Type":"plain/text"})

        const raw = '\n This should go to the next line new line '
        fs.appendFileSync('writefilesync.txt')
        res.end('successfully appended')
     }

      //  appendFile asynchronous
      if(req.url === '/rename'){
        res.writeHead(200, {"Content-Type":"plain/text"})

        fs.rename('copy.txt', 'renamecopy.txt', (err)=>{
            if(err) throw err
            res.end('successfully renamed')
        })
     }

    //  synchronous
     if(req.url === '/renameSync'){
        res.writeHead(200, {"Content-Type":"plain/text"})

        fs.renameSync('copy.txt', 'renamecopy.txt')
        res.end('successfully renamed')
     }

     //  unlink asynchronous
     if(req.url === '/delete'){
        res.writeHead(200, {"Content-Type":"plain/text"})

        fs.unlink('copy.txt', (err)=>{
            if(err) {
                console.log(err)
                res.end('something went wrong')
            }
            res.end('successfully deleted')
        })
     }

          //  unlink synchronous
          if(req.url === '/deleteSync'){
            res.writeHead(200, {"Content-Type":"plain/text"})
    
            fs.unlinkSync('copy.txt')

            res.end('successfully deleted')
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