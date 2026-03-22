// Q38 Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)

const prompt = require("prompt-sync")()

let num = Number(prompt("Enter a Number "))

let sum = 0;
let originalnum = num


while (num > 0) {
    let digit = num % 10;

    // factorial nikalna
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }

    sum += fact;
    num = Math.floor(num / 10);
}


if (sum === originalnum) {
    console.log("Strong Number");
} else {
    console.log("Not a Strong Number");
}