function duplicateCount(text) {
    /* Brute-force dictionary solution. */
    var count = 0;
    var alphanumerical = {};

    for (var i = 0; i < text.length; ++i) {
        var char = text.charAt(i).toLowerCase();
        if (!alphanumerical[char]) alphanumerical[char] = 1;
        else alphanumerical[char] += 1;
    }

    for (var key in alphanumerical)
        if (alphanumerical[key] > 1) count += 1;

    return count;
}

function duplicateCount(text) {
    /* Concise solution w/o regex and using array methods. */
    return text.toLowerCase().split('').filter(function(val, i, arr) {
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

/* ES6 version of the above. */
const duplicateCount = (text) => text
                                  .toLowerCase()
                                  .split('')
                                  .filter((c, i, arr) => arr.indexOf(c) !== i && arr.lastIndexOf(c) === i)
                                  .length;