// Q48 Right Triangle - Alphabet Pattern

let charCode = 65;

for (let i = 1; i <= 7; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(charCode) + " ";
        charCode++
    }
    console.log(row);
}

console.log("✅✅✅✅✅✅✅✅✅✅✅✅", String.fromCharCode(97), "✅✅✅✅✅✅✅✅✅✅✅✅")

for (let i = 7; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(charCode) + " ";
        charCode++
    }
    console.log(row);
}