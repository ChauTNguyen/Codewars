function duplicateEncode(word) {
    var res = [];
    var arr = word.toLowerCase().split('');

    for (var i = 0; i < arr.length; ++i) {
        var c = arr[i];

        if (arr.indexOf(c) === arr.lastIndexOf(c))
            res.push('(');
        else
            res.push(')');
    }

    return res.join('');
}

function duplicateEncode(word) {
    /* Using more array methods! */
    return word
            .toLowerCase()
            .split('')
            .map(function(c, i, arr) {
                return arr.indexOf(c) === arr.lastIndexOf(c) ? '(' : ')'
            })
            .join('');
}

/* Pure ES6 solution. */
const duplicateEncode = (word) =>
              word.toLowerCase().split('').map((c, i, arr) => arr.indexOf(c) === arr.lastIndexOf(c) ? '(' : ')').join('');