// 61 Array left rotation by K elements

const prompt = require("prompt-sync")()
const k = +prompt("Enter Number to rotate the Array : ")

let arr = [1, 2, 3, 54, 6];
let saveArr = new Array(k);

console.log(arr);

for (let i = 0; i < k; i++) {
    saveArr[i] = arr[i];
}

for (let i = 0; i < arr.length - k; i++) {
    arr[i] = arr[i + k];
}

// saved elements end me
for (let i = 0; i < k; i++) {
    arr[arr.length - k + i] = saveArr[i];
}

console.log(arr)