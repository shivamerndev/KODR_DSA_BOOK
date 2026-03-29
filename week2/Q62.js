// Q62 Array Reverse Without Using Extra space

let arr = [10, 20, 30, 40, 50];

let start = 0;
let end = arr.length - 1;

while (start < end) {

  // swap
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  start++;
  end--;
  
}

console.log(arr);