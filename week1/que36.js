// Q36 Accept a number and print its reverse

const prompt = require("prompt-sync")()

let num = Number(prompt("Enter a Number "))

let reverse = ""

while (num > 0) {
    let digit = num % 10
    reverse += digit
    num = Math.floor(num / 10)
}
console.log(reverse)