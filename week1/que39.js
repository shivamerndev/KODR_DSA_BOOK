// Q39 Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)

const prompt = require("prompt-sync")()

let num = Number(prompt("Enter a Number ")), temp = num;
let square = num * num;
let count = 1;

while (num > 0) {

    count *= 10
    num = Math.floor(num / 10)
}


if (square % count === temp) {
    console.log("Automorphic Number");
} else {
    console.log("Not Automorphic Number");
}
