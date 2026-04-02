// Q67 Print the count of subarrays whose sum is equal to the target. (Ex - {1,2,3,7,5}, T = 12 O/P - 2 - [ {2,3,7}, {7,5} ] - Both subarrays have sum 12)


let arr = [1, 2, 3, 7, 5,7]
let target = 12
let sum = 0;
let count = 0

// let map = new Map();
// map.set(0, 1);

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (map.has(sum - target)) {
//         count += map.get(sum - target);
//     }
//     map.set(sum, (map.get(sum) || 0) + 1);
// }

for (let i = 0; i < arr.length; i++) { // noob method.
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum === target) count++
    }
}

console.log(count)