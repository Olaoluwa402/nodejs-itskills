import fs from 'fs'
import { Console } from 'console'

//create a standard output file and a standard error file and write into it
const stdout = fs.createWriteStream('./stdout.log')
const stderr = fs.createWriteStream('./stderr.log')

//create an instannce of the console using the console class
const print = new Console(stdout, stderr);

//you can now begin to use the print for printing into the stdout and stderr

export {print}

