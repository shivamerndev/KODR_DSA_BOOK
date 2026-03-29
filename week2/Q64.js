// Q64 Binary Search. If element found print the index, else -1

let arr = [10, 20, 30, 40, 50], target = 50;

let start = 0, end = arr.length - 1;
let index = -1;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        index = mid;
        break;
    }
    else if (target < arr[mid]) end = mid - 1;
    else start = mid + 1;
}
console.log(index);