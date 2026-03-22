// Q31 Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)

let prompt = require("prompt-sync")()

let num = Number(prompt("Enter a number : "))
let sum = 0

for (let i = 1; i <= num; i++) {

    if (num % i === 0) {
        sum += i
    }
}

console.log(sum)