// Q9 Accept the three sides of triangle and calculate the area using Heron's formula

const que9 = (a, b, c) => {
    
    let s = (a + b + c) / 2
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2)
    console.log(area)
}

que9(10, 10, 10)