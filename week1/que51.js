// Q51 Triangle Pattern

let num = 5

for (let i = 0; i < num; i++) {
    let sum = ""

    for (let j = 0; j < num - i; j++) {
        sum += " "
    }

    for (let j = 0; j <= i; j++) {
        sum += "🗼"
    }

    console.log(sum)
}