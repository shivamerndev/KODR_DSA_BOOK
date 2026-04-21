// Q94 Matrix Diagonal Sum

let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]], length = mat.length

// primary diagonal → 1 + 5 + 9 = 15
// secondary diagonal → 3 + 5 + 7 = 15

// 5 counted twice → subtract once
// Total = 25

let length = mat.length;
let sum = 0;

for (let i = 0; i < n; i++) {
    sum += mat[i][i]; // primary diagonal
    sum += mat[i][length - 1 - i]; // secondary diagonal
}

// remove duplicate center element
if (length % 2 === 1) {
    let mid = Math.floor(length / 2);
    sum -= mat[mid][mid];
}

console.log(sum) // 25