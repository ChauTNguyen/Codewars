function disemvowel(str) {
    /* Regex-less solution for practice. */
    var res = "";

    for (var i = 0; i < str.length; ++i) {
        var low = str.charAt(i).toLowerCase();

        if (low !== 'a' && low !== 'e' && low !== 'i' && low !== 'o' && low !== 'u')
            res += str.charAt(i);
    }

    return res;
}

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

const disemvowel = str => str.replace(/[aeiou]/gi, '');