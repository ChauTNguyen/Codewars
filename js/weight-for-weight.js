function orderWeight(string) {
    /* Initial and messy, but easy to follow solution. */
    return string.split(' ').sort(function(a, b) {
        var sum1 = 0;
        var sum2 = 0;

        for (var i = 0; i < a.length; ++i)
            sum1 += parseInt(a.charAt(i));

        for (var i = 0; i < b.length; ++i)
            sum2 += parseInt(b.charAt(i));

        if (sum1 < sum2) return -1;
        if (sum2 < sum1) return 1;
        
        if (a < b) return -1;
        else return 1;
    }).join(' ');
}

function orderWeight(string) {
    /*
        This solution is also faster than some of others on Codewars
        because although I wanted to use split and reduce for my algorithm
        initially, I thought that it might be unnecessarily adding
        slowness and complexity (reading-wise) to my algorithm.
    */
    return string.split(' ').sort(function(a, b) {
        var acc = 0;

        for (var i = 0; i < a.length; ++i)
            acc += parseInt(a.charAt(i));

        for (var i = 0; i < b.length; ++i)
            acc -= parseInt(b.charAt(i));

        if (acc > 0) return 1;
        if (acc < 0) return -1;

        if (a < b) return -1;
        return 1;
    }).join(' ');
}

function orderWeight(string) {
    /* Slightly slower, but cleaner. */
    const sum = str => str.split('').reduce((total, n) => total + (+n), 0);

    const compare = (a, b) => {
        let sumA = sum(a);
        let sumB = sum(b);
        return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    }

    return string.split(' ').sort(compare).join(' ');
}