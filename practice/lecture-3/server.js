import http from 'http'
import { result, anw, fileSearch, htmlSearch, validateEmail, validateHexa, validatePassword  } from './regex/create-regex.js'
import { print } from './console/customConsole.js'

import './ArrayMethods/reduce.js'

const server = http.createServer((req, res)=> {

    // get /
    if(req.method === 'GET' && req.url === '/'){
        res.writeHead(200, {"Content-Type":"application/json"})
        if(!result && !anw && !fileSearch && !htmlSearch ) {
            console.log('no result')
            res.end('no result')
            return
        }
        
        const data = {
            result,
            anw,
            fileSearch,
            htmlSearch,
            validateEmail : validateEmail ? 'Email is valid' : 'An invalid email',
            validateHexa,
            validatePassword : validatePassword  ? 'valid password': 'invalid password'
        }
        print.log(JSON.stringify(data))
        res.write(JSON.stringify(data))
        res.end()
    }
})


server.listen(8000, (err)=> {
    if(err) {
        console.log('there is an error')
        print.error('there is an error')
        return
    }
    console.log('Server is running ' + new Date().toLocaleDateString())
    print.log('Server is running ' + new Date().toLocaleDateString())
})