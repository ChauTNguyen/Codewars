function divisors(integer) {
    /* Brute-force solution. */
    var divisors = [];

    for (var i = 2; i < integer; ++i)
        if (integer % i == 0) divisors.push(i);

    if (divisors.length === 0) return integer + " is prime";

    return divisors;
};

function divisors(integer) {
    /* Optimized solution. */
    var divisors = [];

    for (var i = 2; i <= Math.floor(integer / 2); ++i) {
        if (integer % i === 0) divisors.push(i);
    }

    return divisors.length ? divisors : integer + " is prime";
}