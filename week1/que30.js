// Q30 Print all the factors of a number.

let prompt = require("prompt-sync")()

let num = Number(prompt("Enter a number : "))

for (let i = 0; i < num; i++) {

    if (num % i === 0) console.log(i, "Is Factor Of ", num)

}