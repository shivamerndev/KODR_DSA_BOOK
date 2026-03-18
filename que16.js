//   Q16 Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)

const prompt = require("prompt-sync")()

let name = prompt("Enter your name : ")
let age = Number(prompt("Enter Your Age : "))

console.log(age > 17 ? `Hello ${name}, You are a valid voter.` : `Sorry ${name}, you can't cast the vote.`)

console.log(18 - (18 - age) && "U will be eligible for voting in next " + (18 - age) + " years")