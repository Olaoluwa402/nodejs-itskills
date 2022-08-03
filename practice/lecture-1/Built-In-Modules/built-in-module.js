
import os from 'os'
import path from 'path'
//There are three types of module 1. Custom modules 2. built-in-modules 3. external modules
//OS userInfo() uptime() totalmem() freemem() release() type()
const userInfo = os.userInfo()
// console.log(userInfo)
const systemDetail = {
    type:os.type(),
    platform:os.platform(),
    uptime:os.uptime(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
// console.log(systemDetail)
//PATH sep join() basename(path) resolve() returns an absolute path

const pathSeparator = path.sep
console.log(pathSeparator)
const pathLink = path.join('/content', 'subfolder', 'text.js')
console.log(pathLink)

const basename = path.basename(pathLink)
console.log(basename)

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.js')
console.log(absolutePath)
//PATH FS   
//PATH HTTP 
