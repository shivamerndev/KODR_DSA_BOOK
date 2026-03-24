// Q52 V Pattern - Min Height = 3

let n = 5;

for (let i = 1; i < n; i++) {
    let row = "";

    for (let j = 1; j <= 2 * n; j++) {

        if (j === i || j === (2 * n - 2 - i)) {
            row += " ♨️";
        } else {
            row += "  ";
        }
    }

    console.log(row);
}