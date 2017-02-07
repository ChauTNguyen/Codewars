function findOdd(A) {
    /* Brute-force language-agnostic O(n^2) solution. */

    for (var i = 0; i < A.length; ++i) {
        var count = 0;

        for (var j = 0; j < A.length; ++j)
            if (A[j] === A[i]) ++count;

        if (count % 2 === 1) return A[i];
    }
    
    return 0;
}

function findOdd(A) {
    /*
        Brute-force O(n) solution that is readable with light
        syntax languages.  
    */

    var counts = {};

    for (var i = 0; i < A.length; ++i) {
        if (counts[A[i]]) counts[A[i]] += 1;
        else counts[A[i]] = 1;
    }

    for (var key in counts)
        if (counts[key] % 2 == 1) return +key;

    return 0;
}

function findOdd(A) {
    /*
        Bitwise solution that works because there's only 1
        element that occurs an odd number of times.
    */
    var res = "";

    for (var i = 0; i < A.length; ++i)
        res ^= A[i];

    return res;
}

/* Pants-wetting solution. */
const findOdd = A => A.reduce((r, el) => r ^= el);