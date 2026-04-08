// Q87 Find Greatest Common Divisor of Array

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findGCD(nums) {

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    return gcd(min, max);
}

console.log(findGCD([2, 5, 6, 9, 10])) // 2
console.log(findGCD([7, 5, 6, 8, 3])) // 1
console.log(findGCD([3, 3])) // 3