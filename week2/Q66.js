// Q66 Move all the negative elements on the left side and positive elements on the right side O(n).

let arr = [2, -3, 5, -1, 0, -7, 4];

// let j = 0;

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] < 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
// }


let left = 0, right = arr.length - 1;
// pointer method.

while (left <= right) {

    if (arr[left] < 0) left++;
    else if (arr[right] >= 0) right--;
    else {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}

console.log(arr);