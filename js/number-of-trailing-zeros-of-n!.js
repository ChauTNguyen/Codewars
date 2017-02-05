function zeros(n) {
    /* Naive solution that breaks if the number is too large for repr. */
    var acc = 1;

    for (var i = 2; i <= n; ++i)
        acc *= i;

    var whileZeros = true;
    var count = 0;
    var i = ('' + acc).length - 1;

    while (i >= 0 && whileZeros) {
        if (('' + acc).charAt(i) === '0') ++count;
        else break;
        --i;
    }
    
    return count;
}

function zeros(n) {
    /* Better, but still unnecessarily, inefficient solution. */
    var twos = 0;
    var fives = 0;

    for (var i = 2; i <= n; i *= 2)
        twos += Math.floor(n / i);

    for (var i = 5; i <= n; i *= 5)
        fives += Math.floor(n / i);

    return (twos > fives) ? fives : twos;
}

function zeros(n) {
    /* Great solution after key observation that # of 5's always is < the # of 2's. */
    var fives = 0;

    for (var i = 5; i <= n; i *= 5)
        fives += Math.floor(n / i);

    return fives;
}