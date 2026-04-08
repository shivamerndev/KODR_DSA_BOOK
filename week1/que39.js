// Q39 Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)

const prompt = require("prompt-sync")()

let num = Number(prompt("Enter a Number "))

let square = num * num;

if (square % 100 === num) {
    console.log("Automorphic Number"); 
} else {
    console.log("Not Automorphic Number"); 
}
