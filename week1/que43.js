// Q43 Question 22 using Switch (Check Consonant or Vowel using Switch)

const prompt = require("prompt-sync")()

let letter = Number(prompt("Enter Any Number."))

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel")
        break;
    default:
        console.log("Consonant")
        break;
}