// Q80 Maximum Number of Pairs in Array

let arr = [3, 2, 3, 2, 5, 2, 2]

let map = {};
let pairs = 0;

for (let i = 0; i < arr.length; i++) {

    let num = arr[i];

    map[num] = (map[num] || 0) + 1;

    console.log(map)

    if (map[num] === 2) {

        pairs++;
        map[num] = 0;
    }
}

let leftover = arr.length - pairs * 2;

console.log("Total pairs: " + pairs + ", Leftover: " + leftover);