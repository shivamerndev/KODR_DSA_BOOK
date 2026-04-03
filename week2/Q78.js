// Q78 Find sum of minimum absolute difference of the given array

// arr = [3,8,15,17]
// |3-8| = 5
// |8-15| = 7
// |15-17| = 2   ← minimum
// Output = 2


let arr = [3,8,15,17];

let minDiff = Infinity;

for(let i = 0; i < arr.length; i++){

    for(let j = i+1; j < arr.length; j++){

        let diff = arr[i] - arr[j];

        if(diff < 0){
            diff = -diff;   // absolute value
        }

        if(diff < minDiff){
            minDiff = diff;
        }
    }
}

console.log(minDiff);