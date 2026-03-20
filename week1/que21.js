// Q21 Bijli Bill

const prompt = require("prompt-sync")()

let units = Number(prompt("Enter Units which u gained : "))

let amount = 0

if (units > 400) {
    amount += (units - 400) * 13
    units = 400
}
if (units > 200 && units <= 400) {
    amount += (units - 200) * 8
    units = 200
}
if (units > 100 && units <= 200) {
    amount += (units - 100) * 6
    units = 100
}
if (units > 0 && units <= 100) {
    amount += units * 4.2
}

console.log("Your Electricity Bill is ", amount)