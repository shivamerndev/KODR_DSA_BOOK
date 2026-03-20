// Q28 Factorial of a number

let prompt = require("prompt-sync")()

let int = Number(prompt("Enter a number : ")) //5
let fac = 1

for (let index = 1; index <= int; index++) {
    fac *= index
}

console.log(fac)