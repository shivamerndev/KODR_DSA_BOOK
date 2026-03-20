//  Q26 Take a number as input and print its table (Ex: 5 \* 1 = 5 ... up to 10 terms)

let prompt = require("prompt-sync")()

let int = Number(prompt("Enter a number : "))


for (let i = 1; i <= 10; i++) {
    if (int > 0) console.log(int * i)
}