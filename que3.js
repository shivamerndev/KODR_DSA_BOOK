// Accept two integers from user and print the sum (Ex - The sum of 45 & 12 = 57)
const prompt = require("prompt-sync")()

let a = Number(prompt("Enter first Number"))
let b = Number(prompt("Enter Second Number."))

console.log(`The sum of ${a} & ${b} = ${a + b}`)