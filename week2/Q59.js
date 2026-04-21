// Q59 Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

const prompt = require("prompt-sync")()

let arr = []
let newArr = []

while (arr.length < 3) {
    const inps = Number(prompt("Enter Number : "))
    arr.push(inps)
}

for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
}

console.log(arr)
console.log(newArr)


// ⬇️⬇️⬇️⬇️⬇️ I tried this Later.

// let arr = [1, 2, 3, 4, 5]
// let newArr = []

// for (let i = 0; i < arr.length; i++) {

//     let digit = arr[arr.length - i - 1]
//     newArr[i] = digit
// }

// console.log(newArr)