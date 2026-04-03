// Q77 Sort First half in Ascending and Second half in descending order in an array

let arr = [5, 2, 8, 7, 1, 6];

let n = arr.length;
let mid = n / 2;

for (let i = 0; i < mid; i++) {

    for (let j = i + 1; j < mid; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

for (let i = mid; i < n; i++) {

    for (let j = i + 1; j < n; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);