// Q44 Project - Guess Game

const prompt = require("prompt-sync")()

let num = null
let rn = null

do {
    rn = Math.trunc(Math.random() * 10)
    num = Number(prompt("Guess A Number : "))
    console.log("The Number was ", rn)
} while (rn !== num);