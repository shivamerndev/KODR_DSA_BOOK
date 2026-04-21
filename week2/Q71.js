// Q71 Build Array from Permutation - easy hai

// ans[0] = nums[ nums[0] ] = nums[0] = 0
// ans[1] = nums[ nums[1] ] = nums[2] = 1
// ans[2] = nums[ nums[2] ] = nums[1] = 2
// ans[3] = nums[ nums[3] ] = nums[5] = 4
// ans[4] = nums[ nums[4] ] = nums[3] = 5
// ans[5] = nums[ nums[5] ] = nums[4] = 3

let arr = [0, 2, 1, 5, 3, 4] // [0,1,2,4,5,3]
let newArr = []

for (let i = 0; i < arr.length; i++) {

    newArr[i] = arr[arr[i]]
}

console.log(newArr)