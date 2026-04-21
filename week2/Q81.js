// Q81 Count Equal and Divisible Pairs in an Array


// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

// Output: 4


let arr = [3, 1, 2, 2, 2, 1, 3], length = arr.length;
let k = 2;
let count = 0;

for (let i = 0; i < length; i++) {

    for (let j = i + 1; j < length; j++) {

        if (arr[i] === arr[j] && (i * j) % k === 0) {
            count++;
        }
    }
}

console.log(count);