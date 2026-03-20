//  Q27 Sum up to n terms.

let prompt = require("prompt-sync")()

let int = Number(prompt("Enter a number : "))
let sum = 0

for (let i = 0; i <= int; i++) {

    sum += int - i
}

console.log(sum)