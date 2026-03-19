// Solve Increment & decrement operator questions

{
    let x = 5;
    let y = x++ + ++x + --x;
    console.log(6, 18);
}


{
    let a = 10;
    let b = 20;

    let result = a++ + --b + ++a + b--;
    console.log(12, 18, 60);
}


{
    let i = 3;

    let ans = i++ + i++ + ++i + --i + i;
    console.log(5, 23);
}

{
    let x = 2;
    let y = 3;

    let z = x++ * ++y + --x * y-- + ++x;
    console.log(3, 3, 19);
}


{
    let a = 1;

    let b = a++ + ++a + a++ + ++a + --a + a--;
    console.log(3, 20);
}