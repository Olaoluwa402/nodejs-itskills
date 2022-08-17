import crypto from 'crypto';
import fs from 'fs';

const algorithm = 'aes-256-ctr';
const secret = '123456';

const encrypt = (text)=> {
   let cipher = crypto.createCipher(algorithm, secret)
   let crypted = cipher.update(text, 'utf-8', 'hex')
       crypted += cipher.final('hex')
       return crypted;
}

const decrypt = (text)=> {
    let decipher = crypto.createDecipher(algorithm, secret)
    let dec = decipher.update(text, 'hex', 'utf-8')
       dec += decipher.final('utf-8')
       return dec;
}

const str = 'This is what we want to encrypt and decrypt'

const e = encrypt(str)
console.log('encrypted', e)

const d = decrypt(e)
console.log('decrypted',d)