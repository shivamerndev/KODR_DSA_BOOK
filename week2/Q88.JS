// Q88 Find the Highest Altitude

// gain = [-5,1,5,0,-7]
// Start = 0
// 0 + (-5) = -5
// -5 + 1 = -4
// -4 + 5 = 1 ← highest
// 1 + 0 = 1
// 1 + (-7) = -6
// Answer = 1

function largestAltitude(gain) {

    let altitude = 0;
    let maxAltitude = 0;

    for (let g of gain) {

        altitude += g;

        if (altitude > maxAltitude) maxAltitude = altitude
    }
    
    return maxAltitude;
}

console.log(largestAltitude([-5, 1, 5, 0, -7])) // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])) // 0