// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

const que8 = (pricipal, rate, time) => {

    let CI = pricipal * Math.pow(1 + rate / 100, time)
    
    console.log(CI)
}

que8(1000, 15, 5)