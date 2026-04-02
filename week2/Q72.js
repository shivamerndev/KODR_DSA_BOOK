// Q72 Given a sorted array of distinct elements, find the summation of absolute differences of all pairs in the given array. (Ex: arr[] = {1, 2, 3, 4}, Output: 10)

// arr = [1,2,3,4]
// pairs:
// |1-2|=1
// |1-3|=2
// |1-4|=3
// |2-3|=1
// |2-4|=2
// |3-4|=1
// Total = 1+2+3+1+2+1 = 10

let arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        sum += Math.abs(arr[i] - arr[j]);
    }
}

// optimized approach ⬇️⬇️⬇️⬇️
let prefixSum = 0;
let result = 0;

for (let i = 0; i < arr.length; i++) {
    result += arr[i]*i - prefixSum;
    prefixSum += arr[i];
}

console.log(result);

console.log(sum); // 10