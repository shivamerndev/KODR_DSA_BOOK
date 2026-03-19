// Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)
const prompt = require("prompt-sync")()

let name = prompt("Enter Your Name")
let age = prompt("Enter Your Age.")

console.log(`Hello ${name}, you are ${age} years old.`)