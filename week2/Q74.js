// Q74 Given an array of integers, update every element with the multiplication of previous and next elements with the following exceptions: a) The First element is replaced by the multiplication of the first and second. b) The last element is replaced by multiplication of the last and second last. (Ex: Input : arr[] = {2, 3, 4, 5, 6}, Output : arr[] = {6, 8, 15, 24, 30})

// Input: [2,3,4,5,6]
// index 0 → 2×3 = 6
// index 1 → 2×4 = 8
// index 2 → 3×5 = 15
// index 3 → 4×6 = 24
// index 4 → 5×6 = 30
// [6,8,15,24,30]

let arr = [2, 3, 4, 5, 6];
let n = arr.length;
let prev = arr[0];     // store first element
arr[0] = arr[0] * arr[1];   // first rule

for (let i = 1; i < n - 1; i++) {
    
    let curr = arr[i];
    arr[i] = prev * arr[i + 1];
    prev = curr;   // update previous
}

arr[n - 1] = prev * arr[n - 1];   // last rule

console.log(arr);