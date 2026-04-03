// Q83 Smallest Index With Equal Value

// nums = [0,1,2] 🍇🍎
// i=0 → 0 % 10 = 0 → nums[0]=0 ✅
// Answer = 0

// nums = [4,3,2,1]🍇🍎
// i=0 → 0%10=0 ≠ 4
// i=1 → 1%10=1 ≠ 3
// i=2 → 2%10=2 = 2 ✅
// Answer = 2

function smallestEqual(nums) {        // (Brute force / Optimal same)

    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) {
            return i; // smallest index mil gaya
        }
    }
    return -1;
}

console.log(smallestEqual([0, 1, 2])); // 0
console.log(smallestEqual([4, 3, 2, 1])); // 2
console.log(smallestEqual([1, 2, 3])); // -1