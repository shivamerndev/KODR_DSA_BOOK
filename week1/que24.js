//  Q24 Print natural number up to n.

let prompt = require("prompt-sync")()

let int = Number(prompt("Enter a number : "))

for (let i = 0; i < int; i++) {
    if(int>0)console.log(i+1)
}