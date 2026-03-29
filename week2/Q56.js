// Q56 Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)

let arr = [2, 96, 69, 2, 96, 69, 77, 145, 200, 77, 145, 20];

let max = arr[0];
let index = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}
console.log(max + " found at " + index + " index");