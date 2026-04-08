// Q89 Minimum Sum of Four Digit Number After Splitting Digits

// 2932 → digits = [2,9,3,2]
// Sort digits:
// [2,2,3,9]
// We must form two numbers using all digits to get minimum sum.
// Best combination:
// 29 and 23
// 29 + 23 = 52

function minimumSum(num) {

    let digits = String(num).split('').sort((a, b) => a - b);

    let num1 = digits[0] + digits[3];
    let num2 = digits[1] + digits[2];

    return Number(num1) + Number(num2);
}

console.log(minimumSum(2932)) // 52
console.log(minimumSum(4009)) // 13
console.log(minimumSum(1234)) // 37