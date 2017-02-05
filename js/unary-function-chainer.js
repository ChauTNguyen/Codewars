function chained(functions) {
    return function(input) {
        for (var i = 0; i < functions.length; i++) {
            input = functions[i](input);
        }

        return input;
    }
}

/* ES6 solution that does a left fold. */
const chained = functions => arg => functions.reduce((f, fn) => fn(f), arg);

/* ES6 reverseChained for practice (that doe a right fold). */
const reverseChained = functions => arg => functions.reverse().reduce((f, fn) => fn(f), arg);