 // Q15 Accept an integer and check whether it is an even number or odd.
 
const prompt = require("prompt-sync")()

 let int = Number(prompt("Enter A Number : "))

    let even = int % 2 === 0
    console.log(even ? "Even number" : "Odd Number")