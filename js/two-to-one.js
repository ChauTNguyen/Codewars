function longest(s1, s2) {
    /*
        Pretty sure JavaScript has some form of isAlpha function,
        but I set up the alphabet to create my `letters` dictionary
        which I then use to solve the problem. 
    */
    var longestUnique = "";
    var letters = {};
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < alphabet.length; ++i) {
        letters[alphabet.charAt(i)] = 0;
    }

    for (var i = 0; i < s1.length; ++i) {
        if (letters[s1.charAt(i)] === 0) {
            longestUnique += s1.charAt(i);
            letters[s1.charAt(i)] += 1;
        }
    }

    for (var i = 0; i < s2.length; ++i) {
        if (letters[s2.charAt(i)] === 0) {
            longestUnique += s2.charAt(i);
            letters[s2.charAt(i)] += 1;
        }
    }

    return longestUnique.split('').sort().join('');
}

function longest(s1, s2) {
  /* This ES5 solution takes advantage of the Set data structure. */
  return Array.from(new Set(s1 + s2)).sort().join('');
}

/* ES6 pure solution of the above. */
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');