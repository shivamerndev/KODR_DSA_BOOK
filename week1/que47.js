// Q47 Right Triangle - Number Pattern

for (let i = 0; i <= 4; i++) {
    let row = ""

    for (let id = 1; id <= i; id++) {
        row += i + " "
    }
    console.log(row)
}

// Left Triangle - Number Pattern

for (let i = 4; i >= 1; i--) {
    let row = ""

    for (let id = 1; id <= i; id++) {
        row += i + " "
    }
    console.log(row)
}