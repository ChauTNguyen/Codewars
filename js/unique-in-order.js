var uniqueInOrder = function(iterable) {
    /* Initial, unnecessarily complicated solution. */
    if (Array.isArray(iterable)) {
        return iterable.filter(function(c, i, arr) {
            return (!arr[i + 1] !== c && arr[i - 1] !== c);
        });
    }

    return iterable
        .split('')
        .filter(function(c, i, arr) {
            return (!arr[i + 1] !== c && arr[i - 1] !== c);
        });
}

function uniqueInOrder(iterable) {
    /* Simple solution that also naturally preserves the order. */
    var res = [];

    for (var i = 0; i < iterable.length; ++i) {
        if (iterable[i] !== res[res.length - 1]) {
            res.push(iterable[i]);
        }
    }
 
    return res;
}