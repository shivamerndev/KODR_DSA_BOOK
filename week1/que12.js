//  Q12 Accept two numbers and print the greatest between them

const prompt = require("prompt-sync")()

let a = Number(prompt("Enter first Number : "))
let b = Number(prompt("Enter second Number : "))

let max = Math.max(a, b)

console.log(max)