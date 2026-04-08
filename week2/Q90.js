// Q90 Sort Even and Odd Indices Independently

// nums = [4,1,2,3]
// even index values → [4,2] → sort asc → [2,4]
// odd index values → [1,3] → sort desc → [3,1]
// result → [2,3,4,1]

function sortEvenOdd(nums) {

    let even = [];
    let odd = [];

    // separate values
    for (let i = 0; i < nums.length; i++) {

        if (i % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    // sort
    even.sort((a, b) => a - b); // ascending
    odd.sort((a, b) => b - a); // descending

    // put back
    let e = 0;
    let o = 0;

    for (let i = 0; i < nums.length; i++) {

        if (i % 2 === 0) {
            nums[i] = even[e++];
        } else {
            nums[i] = odd[o++];
        }
    }
    return nums;
}

console.log(sortEvenOdd([4, 1, 2, 3])) // [2,3,4,1]
console.log(sortEvenOdd([2, 1])) // [2,1]