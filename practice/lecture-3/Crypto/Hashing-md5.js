//load crypto module
import crypto from 'crypto'

const str = 'olaoluwa3024';
const algorithm = 'sha256'; // md5, whirlpool, sha1, sha224, sha256
//cerate hash object
let hash = crypto.createHash(algorithm)

let data = hash.update(str, 'utf-8')

//pass format to digest
let final_hash = data.digest('hex')

console.log('hash result', final_hash)