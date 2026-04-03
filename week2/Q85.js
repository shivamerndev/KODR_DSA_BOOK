// Q85 Make Array Zero by Subtracting Equal Amounts

let nums = [1, 5, 0, 3, 5], num2 = [0] // 0
// Step1 → subtract 1 → [0,4,0,2,4]
// Step2 → subtract 2 → [0,2,0,0,2]
// Step3 → subtract 2 → [0,0,0,0,0]
// Answer = 3

let set = new Set();

for (let num of nums) {
    if (num > 0) {
        set.add(num);
    }
}
console.log(set.size);


// brute force approach (Optimal approach is above)⬇️⬇️⬇️

let count = 0;

while (true) {
    let min = Infinity;

    for (let num of nums) {
        if (num > 0) {
            min = Math.min(min, num);
        }
    }

    if (min === Infinity) break;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            nums[i] -= min;
        }
    }
    count++;
}

console.log(count)