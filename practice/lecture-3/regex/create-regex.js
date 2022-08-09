import fs from 'fs';
// 1. using /search tearm goes here/
const str = 'gdaggajh  jksahgdsa ashash hello uiyua hajhda hjgahgd hello \n'
const pattern = /hello/igm 

const result = str.match(pattern)
console.log(result);

//2. using regex construction function
const search = 'peter'
const anw = str.match(new RegExp(search), 'igm')

// comon exaples

// Exaple 1. read file and search for pattern
const strng = fs.readFileSync('regex/data.txt').toString()
const prt = /dolorem/igm
const fileSearch = strng.match(prt);

//example 2
const htmlPattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
const htmlString = fs.readFileSync('regex/data.html').toString()
const htmlSearch = htmlString.match(htmlPattern);

//example 3.  validate email
const email = 'examplegmaial.comm'
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const validateEmail = emailPattern.test(email)

//example 4. valideate hexadecimal
const hexaString = '1564abc'
const hexaPattern = /^[a-fA-F0-9]+$/g

const validateHexa = hexaString.match(hexaPattern)

//example 5. validate password
const password = '123Aw@'
const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
const validatePassword = password.match(passwordPattern)

export {result, anw, fileSearch, htmlSearch, validateEmail, validateHexa, validatePassword }