// Q35 Sum of digits of a number (Ex: 936 = 18)

let prompt = require("prompt-sync")()

let num = Number(prompt("Enter a number : "))

// let sum = num.toString().split("").reduce((acc, n) => acc + Number(n), 0)

let sum = 0

for (let i = 0; i < num; i++) {

    let digit = num % 10
    sum += digit
    num = digit
}

console.log(sum, "sum")