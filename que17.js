//  Q17 Accept a day number between 1-7 and print the corresponding day name.

const prompt = require("prompt-sync")()

let num = Number(prompt("Enter Any Number : "))

switch (num) {
    
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log('Qunday')
        break;
}

console.log(num > 7 ? "Qunday" : ["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"][num - 1])