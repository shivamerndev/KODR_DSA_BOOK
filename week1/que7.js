// Accept the length and width of a rectangle. Calculate & print the area and perimeter.

const prompt = require("prompt-sync")()

let length = Number(prompt("Enter first Number"))
let width = Number(prompt("Enter second Number"))

let area = length * width;
let perimeter = 2 * (length + width)

console.log("area is " + area + " and perimeter is " + perimeter)