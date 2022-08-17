import crypto from 'crypto'

const secret = '123456';
const algorithm = 'sha256' //sha512, md5
const password ='olaoluwa'

//create hash object
const hash = crypto.createHmac(algorithm, secret);

const hash_update = hash.update(password, 'utf-8');

//use right format to digest
const result = hash_update.digest('hex');

console.log(result)