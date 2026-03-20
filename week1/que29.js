// Q29 Print the sum of all even & odd numbers in a range separately.

let prompt = require("prompt-sync")()

let range = Number(prompt("Enter a number : "))

let even = 0
let odd = 0;

for (let i = 0; i <= range; i++) {

    if (i % 2 === 0) even += i
    else odd += i
}

console.log(even, odd)