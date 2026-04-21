// Q82 Keep Multiplying Found Values by Two

let arr = [5, 3, 6, 1, 12], original = 3;

let set = new Set(arr);

while (set.has(original)) {
    original = original * 2;
}
console.log(original)

// brute force approach ⬇️⬇️⬇️

let found = true;

while (found) {

    found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === original) {
            original = original * 2;
            found = true;
            break; // start checking again
        }
    }
}
console.log(original) // 24