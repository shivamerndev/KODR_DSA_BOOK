// Q96 Flipping an Image

// image
//  [ [1,1,0],
//   [1,0,1],
//   [0,0,0] ]

// Step1 (reverse each row):
// [ [0,1,1],
//   [1,0,1],
//   [0,0,0] ]

// Step2 (invert) || Answer:
// [ [1,0,0],
//   [0,1,0],
//   [1,1,1] ]


function flipAndInvertImage(image) {

    for (let row of image) {

        let left = 0;
        let right = row.length - 1;

        while (left <= right) {

            // swap + invert together
            let temp = row[left] ^ 1;
            row[left] = row[right] ^ 1;
            row[right] = temp;

            left++;
            right--;
        }
    }

    return image;
}
console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])) // output: Above in Example.
console.log(flipAndInvertImage([[1, 0, 0], [0, 1, 1]]))