import crypto from 'crypto';
import fs from 'fs';

const algorithm = 'sha256';
const filename = 'data.txt'

//create the hash object
const hash = crypto.createHash(algorithm)

//read the file using readstream
const stream = fs.ReadStream(filename, 'utf-8')

stream.on('data', (data)=> {
   console.log(data)
   hash.update(data, 'utf-8')
})

stream.on('end', ()=>{
    //digest using the right format
    const result = hash.digest('hex')
console.log(result)
    fs.writeFileSync(filename, result)
})