// Q34 Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)

let prompt = require("prompt-sync")()

let num = Number(prompt("Enter a number : "))

// let line = num.toString().split("").reverse().join(" ")

let line = ""

while (num > 0) {
    line += num % 10 + " " ; // last digit   // print
    num = Math.floor(num / 10); // last digit remove
}

console.log(line)