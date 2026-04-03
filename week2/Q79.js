// Q79 Divide Array Into Equal Pairs

// EX:-
// Input: [3,2,3,2,2,2]            // Input: [1,2,3,4]
// Pairs:                          // 1 appears 1 time → cannot make pair
// (3,3)                           // Output: false
// (2,2)
// (2,2)
// Output: true

let arr = [3, 2, 3, 2, 2, 2];
let n = arr.length;
let canDivide = true;

for (let i = 0; i < n; i++) {
    
    let count = 0;

    for (let j = 0; j < n; j++) {

        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count % 2 !== 0) {
        canDivide = false;
        break;
    }
}

console.log(canDivide);