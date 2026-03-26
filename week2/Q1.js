// Q55 Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.
const prompt = require("prompt-sync")()

let n = Number(prompt("Define Array Length : "))
let arr = new Array(n)
let sum = 0;
let temp = n;

while (n > 0) {
    arr[n] = prompt("Enter A Number : ")
    sum += +arr[n]
    n--
}

let avg = sum / temp;

console.log(sum, avg)