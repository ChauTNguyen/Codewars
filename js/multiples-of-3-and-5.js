function solution(number) {
    /* ES5 FP-based solution (but no list comprehensions so I cheated...). */
    var list = [];

    for (var i = 0; i < number; ++i) list.push(i);

    return list.filter(function(value) {
        return (value % 3 == 0 || value % 5 == 0)
    }).reduce(function(a, b) {
        return a + b
    }, 0);
}

/* One-liner, yet still readable, FP ES6 solution. */
const solution = number => (number > 0) ? [...Array(number).keys()]
                                            .filter(n => (n % 3 == 0 || n % 5 == 0))
                                            .reduce((a, b) => a + b, 0) : 0;