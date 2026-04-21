// Q57 Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

let arr = [169, 77, 2, 96, 69, 77, 145, 20]  // new arr ho gya [ 77, 2, 96, 69, 77, 145, 20]

// -Infinity use karte hain taaki:
// 👉 first comparison hamesha correctly ho
// 👉 negative numbers ke case me bhi logic sahi chale


let max = -Infinity
let sMax = -Infinity

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        sMax = max
        max = arr[i]
    }
    else if (arr[i] !== max && arr[i] > sMax){
        sMax = arr[i]
    }
}

console.log("Second greatest =", sMax);