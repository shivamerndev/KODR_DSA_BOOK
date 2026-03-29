// Q57 Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

let arr = [2, 96, 69, 77, 145, 20];

// -Infinity use karte hain taaki:
// 👉 first comparison hamesha correctly ho
// 👉 negative numbers ke case me bhi logic sahi chale

let first = -Infinity;
let second = -Infinity;


for (let i = 0; i < arr.length; i++) {

    if (arr[i] > first) {
        second = first;
        first = arr[i];
    }
    else if (arr[i] > second && arr[i] !== first) {
        second = arr[i];
    }

}
console.log("Second greatest =", second);