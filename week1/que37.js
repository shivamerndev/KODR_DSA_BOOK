// Q37 Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)

const prompt = require("prompt-sync")()

let num = Number(prompt("Enter a Number "))
let reverse = 0

while (num > 0) {
    let digit = num % 10
    reverse += digit
    if (reverse == num) {
        console.log("Palindrome Hai.")
        break;
    }
    num = Math.trunc(num / 10)
}