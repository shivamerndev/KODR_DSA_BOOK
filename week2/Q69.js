// Q69 Special number using methods.

// 1230 → Special Number
// 4527 → Special Number
// 1234 → Not Special Number

// (sum of digits of left half = sum of digits of right half)

let num = 1230;

let str = num.toString();
let length = str.length;

// check even digits
if (length % 2 !== 0) {
    console.log("Not Special Number");
} else {

    let half = length / 2;
    let leftSum = 0;
    let rightSum = 0;

    // left half sum
    for (let i = 0; i < half; i++) {
        leftSum += Number(str[i]);
    }

    // right half sum
    for (let i = half; i < length; i++) {
        rightSum += Number(str[i]);
    }

    if (leftSum === rightSum) {
        console.log("Special Number");
    } else {
        console.log("Not Special Number");
    }
}