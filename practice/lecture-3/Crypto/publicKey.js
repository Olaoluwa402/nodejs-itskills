import crypto, { publicEncrypt } from 'crypto';
import fs from 'fs';
 
const pubKey = fs.readFileSync('pub.key').toString();
const privateKey = fs.readFileSync('private.key').toString()

const buf = Buffer.from(privateKey, 'utf-8')

const secretData = publicEncrypt(pubKey, buf);

console.log('secretData', secretData)