import express from 'express'
import { Server } from 'socket.io'
import {createServer} from 'http'
import cors from 'cors';
import path from 'path'

//our express app
const app = express()

app.use(cors());

const __dirname = path.resolve();

console.log(__dirname)


//setup http server
const server = createServer(app)

server.listen(4000, (err)=> console.log('server is running'))

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/index.html');
})

app.get('/admin', (req,res)=> {
    res.sendFile(__dirname + '/admin.html');
})

//setup socket io server
const io = new Server(server);

io.on('connection', (socket)=>{
      console.log(`user with socketId - ${socket.id} connected`)
     
       socket.on('new', (data)=>{
            //welcome user
            socket.emit('welcome', {data:`Welcome ${socket.id}`});

            io.sockets.emit('next', {data:data})
            
       })

})

//