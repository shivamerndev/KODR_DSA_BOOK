// Q95 Transpose Matrix

// Rule = newArr[j][i] = matrix[i][j]
// Matrix = [ [1,2,3],[4,5,6] ]
// Transpose = [
//  [1,4],
//  [2,5],
//  [3,6]]

let mat = [
    [1, 2, 3],
    [4, 5, 6]]

let rows = mat.length
let cols = mat[0].length

let newArr = []

for (let i = 0; i < cols; i++) {

    newArr[i] = []   // create inner array because It will occur error

    for (let j = 0; j < rows; j++) newArr[i][j] = mat[j][i]
}

console.log(newArr)