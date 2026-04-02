// Q70 Concatenation of array

{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    let result = arr1.concat(arr2);
    console.log(result);
}
{

    let a = [1, 2];
    let b = [3, 4];
    let c = [5, 6];

    let result = a.concat(b, c);
    console.log(result);
}

{

    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    let result = [...arr1, ...arr2];
    console.log(result);
}
