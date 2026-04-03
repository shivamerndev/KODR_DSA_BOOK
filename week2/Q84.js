// Q84 Count Operations to Obtain Zero

// num1 = 2, num2 = 3
// 3-2 = 1 → (2,1) → count 1
// 2-1 = 1 → (1,1) → count 2
// 1-1 = 0 → (1,0) → count 3
// Answer = 3

let count = 0;

function countOperations(num1, num2) {

    while (num1 && num2) {

        if (num1 > num2) {
            count += Math.floor(num1 / num2);
            num1 = num1 % num2;
        } else {
            count += Math.floor(num2 / num1);
            num2 = num2 % num1;
        }
    }
    return count;
}

console.log(countOperations(2, 3)); // 3

// brute force approach (Optimal approach is above)
function countOperations(num1, num2) {

    let count = 0;

    while (num1 !== 0 && num2 !== 0) {

        if (num1 > num2) {
            num1 = num1 - num2;
        } else {
            num2 = num2 - num1;
        }
        count++;
    }
    return count;
}

console.log(countOperations(2, 3)); // 3
console.log(countOperations(10, 10)); // 1