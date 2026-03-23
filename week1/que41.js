// Q41 Make a choice based calculator using do while
const prompt = require("prompt-sync")()

let a = Number(prompt("Enter Number a : "))
let b = Number(prompt("Enter Number b : "))
let choice = 1

let calculate = 0;

do {
    choice = Number(prompt("Choose for calculation : "))
    switch (choice) {
        case 1:
            calculate = a + b;
            break;
        case 2:
            calculate = a - b;
            break;
        case 3:
            calculate = a * b;
            break;
        case 4:
            calculate = a / b;
            break;
        default:
            break;
    }
    console.log(calculate.toFixed(2))
} while (choice > 4);