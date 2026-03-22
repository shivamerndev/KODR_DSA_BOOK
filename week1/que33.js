// Q33 Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex - a = 2, b = 5, OP - 2^5 = 32)

let prompt = require("prompt-sync")()

let a = Number(prompt("Enter a number : "))
let b = Number(prompt("Enter a number : "))

// let pow = Math.pow(a, b)

let pow = 1

for (let i = 1; i <= b; i++) {

    pow *= a

}

console.log(pow)