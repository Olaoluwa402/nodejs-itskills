import fs from 'fs'

const readText = (path) => {
    return new Promise((resolve, reject)=> {
            fs.readFile(path, 'utf8', (err, data)=> {
                if(err) {
                    reject(err)
                }else{
                    resolve(data)
                }
            })
    })
}

export {readText}