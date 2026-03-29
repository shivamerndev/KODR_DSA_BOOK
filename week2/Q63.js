// Q63 Linear Search an array - If element found print the index, else -1

let prompt = require("prompt-sync")()
let elem = +prompt("Search An Element : ")

let arr = [10, 20, 30, 40, 50];
let index = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
        index = i
        break;
    }
}

if (index) {
    console.log(index)
} else {
    console.log(index)
}