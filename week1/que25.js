//  Q25 Reverse for loop. Print n to 1.

let prompt = require("prompt-sync")()

let int = Number(prompt("Enter a number : "))

for (let i = 0; i < int; i++) {
    if (int > 0) console.log(int - i)
}
