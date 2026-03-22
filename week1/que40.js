// Q40 Print \hello\" until user gives wrong input using do while"

const prompt = require("prompt-sync")()

let input;

do {
    console.log("hello");
    input = prompt("Enter hello to continue:");
} while (input === "hello");