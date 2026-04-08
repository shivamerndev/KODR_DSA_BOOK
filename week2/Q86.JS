// Q86 Count Hills and Valleys in an Array

// nums = [2,4,1,6,5]
// 4 is hill (2 < 4 > 1)
// 1 is valley (4 > 1 < 6)
// 6 is hill (1 < 6 > 5)
// Answer = 3

function countHillValley(nums) {

    let arr = [];

    // remove consecutive duplicates
    for (let num of nums) {
        if (arr.length === 0 || arr[arr.length - 1] !== num) {
            arr.push(num);
        }
    }
    let count = 0;

    for (let i = 1; i < arr.length - 1; i++) {

        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            count++;
        }
        if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
            count++;
        }
    }
    return count;
}

console.log(countHillValley([2, 4, 1, 1, 6, 5])) // 3
console.log(countHillValley([6, 6, 5, 5, 4, 1])); // 0