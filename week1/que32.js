// Q32 Check if the number is Prime or not.

let prompt = require("prompt-sync")()

let num = Number(prompt("Enter a number : "))
let isPrime = true;


if (num === 2) {
    console.log("2 is a Prime Number")

} else if (num === 1 || num % 2 === 0) {
    isPrime = false

} else {
    for (let i = 3; i <= Math.trunc(Math.sqrt(num)); i += 2) {
        if (num % i === 0) {
            console.log(i)
            isPrime = false
            break;
        }
    }
}

if (isPrime) {
    console.log(" Prime Number")
} else {
    console.log("Not A Prime Number")
}


// let fac = 0  // this is not a fucking good apporoach.

// for (let i = 1; i <= num; i++) {

//     if (num % i === 0) ++fac

// }

// if (fac === 1) console.log("Prime Number Hai.")
// else console.log("Not a Prime Number.") 