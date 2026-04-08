// Q94 Matrix Diagonal Sum

// [ [1,2,3],
//   [4,5,6],
//   [7,8,9] ]

// primary diagonal → 1 + 5 + 9 = 15
// secondary diagonal → 3 + 5 + 7 = 15

// 5 counted twice → subtract once
// Total = 25

function diagonalSum(mat) {

    let n = mat.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {

        sum += mat[i][i]; // primary diagonal
        sum += mat[i][n - 1 - i]; // secondary diagonal
    }
    // remove duplicate center element
    if (n % 2 === 1) {
        let mid = Math.floor(n / 2);
        sum -= mat[mid][mid];
    }
    return sum;
}

console.log(diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])) // 25