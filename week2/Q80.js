// Q80 Maximum Number of Pairs in Array

let arr = [3, 2, 3, 2, 5, 2, 2];
let map = {};
let pairs = 0;

for (let i = 0; i < arr.length; i++) {

    let val = arr[i]
    map[val] = (map[val] || 0) + 1
}
console.log(map)

for (let key in map) {
    // object me sirf "in" chalta hai but arr me "of/in" dono
    let pair = Math.floor(map[key] / 2)
    pairs += pair
}

let leftover = arr.length - pairs * 2;

console.log("Total pairs: " + pairs + ", Leftover: " + leftover);