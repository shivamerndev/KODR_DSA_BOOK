// Q23 Accept an integer and Print \Hello World\" n times"

let prompt = require("prompt-sync")()

let int = Number(prompt("Enter a number : "))

for (let i = 0; i < int; i++) {
    console.log("Hello World \n ")
}