// Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)
const prompt = require("prompt-sync")()

let a = Number(prompt("Enter first Number"))

let b = Number(prompt("Enter second Number"))

console.log("Initial State ", a, b)

{
    let temp = a
    a = b
    b = temp

    console.log(" Swapped State ", a, b)
}

{
    a = a + b;
    b = a - b;
    a = a - b;

    console.log("Again Swapped State ", a, b)
}

{
    [a, b] = [b, a]

    console.log(" Swapped State ", a, b)
}