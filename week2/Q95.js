// Q95 Transpose Matrix

// Rule = result[j][i] = matrix[i][j]
// Matrix = [ [1,2,3],[4,5,6] ]
// Transpose = [ [1,4],[2,5],[3,6] ]

function transpose(matrix) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    let result = Array.from({ length: cols }, () => Array(rows));

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < cols; j++) {

            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
console.log(transpose([[1, 2, 3], [4, 5, 6]]))// output: Above in Example.