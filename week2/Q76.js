// Q76 Given an array of even size, task is to find minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half. (Ex: Input : 1 2 1 2 1 3, Output : 2)

// Left  = [1,2,1]  → sum = 4
// Right = [2,1,3]  → sum = 6
// 6 - 4 = 2


let arr = [1,2,1,2,1,3];

let mid = arr.length / 2;

let leftSum = 0;
let rightSum = 0;

for(let i = 0; i < mid; i++){
    leftSum += arr[i];
}

for(let i = mid; i < arr.length; i++){
    rightSum += arr[i];
}

let result = Math.abs(leftSum - rightSum);

console.log(result);