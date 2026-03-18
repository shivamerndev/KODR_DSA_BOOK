//  Q19 Accept a year and check if it a leap year or not (google to find out what's a leap year)

const prompt = require("prompt-sync")()

let year = Number(prompt("Enter a year : "))


let leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)

console.log(leap ? `${year} is a leap year` : `No ${year} is not a leap year.`)