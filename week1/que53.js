// Q53 X Pattern

let num = 10

for (let i = 1; i <= num; i++) {
    let x = ""
    for (let j = 1; j <= num; j++) {
        if (j === i || j === num + 1 - i) x += " 😁";
        else x += "  "
    }
    console.log(x)
}

let n = 10;

for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j <= n; j++) {
        if (j === i || j === n - i) {
            row += " ♨️";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}