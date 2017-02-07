function firstNonRepeatingLetter(s) {
    /* Brute-force O(n^2) solution. */
    var lcStr = s.toLowerCase();

    for (var i = 0; i < lcStr.length; ++i) {
        var repeated = false;

        for (var j = 0; j < lcStr.length; ++j) {
            if (lcStr.charAt(i) === lcStr.charAt(j) && i !== j)
                repeated = true;
        }

        if (!repeated) return s.charAt(i);
    }

    return "";
}

function firstNonRepeatingLetter(s) {
    /* Cleanest. */
    var l = s.toLowerCase();

    for (var i = 0; i < l.length; ++i)
        if (l.indexOf(l[i]) === l.lastIndexOf(l[i]))
            return s[i];

    return "";
}