// Q93 Two Furthest Houses With Different Colors

// colors = [1, 1, 1, 6, 1, 1, 1]

// compare far houses:

// index 0 and 3 → different → distance = 3
// index 6 and 3 → different → distance = 3
// Answer = 3

function maxDistance(colors) {

    let n = colors.length;
    let maxDist = 0;

    for (let i = 0; i < n; i++) {

        if (colors[i] !== colors[0]) {
            maxDist = Math.max(maxDist, i);
        }
        if (colors[i] !== colors[n - 1]) {
            maxDist = Math.max(maxDist, n - 1 - i);
        }
    }
    return maxDist;
}

// brute force approach - O(n^2)⬇️⬇️⬇️⬇️⬇️
function maxDistance(colors) {

    let maxDist = 0;

    for (let i = 0; i < colors.length; i++) {

        for (let j = i + 1; j < colors.length; j++) {

            if (colors[i] !== colors[j]) {
                maxDist = Math.max(maxDist, j - i);
            }
        }
    }
    return maxDist;
}

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1])) // 3
console.log(maxDistance([1, 8, 3, 8, 3])) // 4