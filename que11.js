//   Q11 Find circumference and area of circle
const prompt = require("prompt-sync")()

let r = prompt("Enter Radius Value : ")

    let C = 2 * Math.PI * r

    let A = Math.PI * Math.pow(r, 2)

    console.log(C, A)