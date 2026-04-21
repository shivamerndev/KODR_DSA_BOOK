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

    for (let row of image) { // we can go with length

        let start = 0;
        let end = row.length - 1;

        while (start <= end) {

            // swap + invert together
            let temp = row[start] ^ 1;   // 0 ^ 1 = 1 xor bolte
            row[start] = row[end] ^ 1;  // 1 ^ 1 = 0
            row[end] = temp;

            start++;
            end--;
        }
    }

    return image;
}
console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])) // output: Above in Example.
console.log(flipAndInvertImage([[1, 0, 0], [0, 1, 1]]))


// ⬇️⬇️⬇️ Me and Future Bhai Tried Later. ⬇️⬇️⬇️

// let newArr = []
// let rows = image[0].length

// for (let i = 0; i < image.length; i++) {

//     let arr = image[i]

//     let start = 0;
//     let end = arr.length - 1

//     while (start <= end) {

//         let temp = arr[start] ^ 1
//         arr[start] = arr[end] ^ 1
//         arr[end] = temp

//         start++
//         end--
//     }
//     newArr[i] = arr
// }
// console.log(newArr)