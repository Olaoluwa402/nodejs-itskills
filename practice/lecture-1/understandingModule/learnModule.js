//require the needed files
import {lastName, firstName} from './constants.js'
import {greet} from './utils.js'

console.log(greet(firstName))
console.log(greet(lastName))
console.log(greet('Nobody'))