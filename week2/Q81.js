// Q81 Count Equal and Divisible Pairs in an Array

// (0,6) → 3 = 3 and (0*6)%2 = 0
// (1,5) → 1 = 1 and (1*5)%2 = 1 ❌ not allowed
// (2,3) → 2 = 2 and (2*3)%2 = 0
// (2,4) → 2 = 2 and (2*4)%2 = 0
// (3,4) → 2 = 2 and (3*4)%2 = 0

// Output → 4

let arr = [3, 1, 2, 2, 2, 1, 3], length = arr.length;
let k = 2;
let count = 0;

for (let i = 0; i < length; i++) {

    for (let j = i + 1; j < length; j++) {

        if (arr[i] === arr[j] && (i * j) % k === 0) {
            count++;
        }
    }
}

console.log(count);