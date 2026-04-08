// Q91 Min Max Game - Array

// nums = [1,3,5,2,4,8,2,2]

// Step1:
// [min(1,3), max(5,2), min(4,8), max(2,2)]
// = [1,5,4,2]

// Step2:
// [min(1,5), max(4,2)]
// = [1,4]

// Step3:
// [min(1,4)]
// = [1]
// Answer = 1

function minMaxGame(nums) {

    while (nums.length > 1) {

        let newArr = [];

        for (let i = 0; i < nums.length / 2; i++) {

            if (i % 2 === 0) {
                newArr[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
            } else {
                newArr[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
            }
        }
        nums = newArr;
    }
    return nums[0];
}

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])) // 1