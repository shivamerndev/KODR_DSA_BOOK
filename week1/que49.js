// Q49 Inverted Right Triangle Pattern

for (let i = 4; i >= 0; i--) {

    let row = ""

    for (let j = 0; j < i; j++) {
        row += "* "
    }
    console.log(row)
}
