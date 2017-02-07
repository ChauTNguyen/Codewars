/* wat solution */
function encrypt(text, n) {
    if (text) {
        for (var x = 0; x < n; ++x) {
            var res = "";

            for (var y = 1; y < text.length; ++y)
                if (y % 2 == 1) res += text.charAt(y);

            for (var z = 0; z < text.length; ++z)
                if (z % 2 == 0) res += text.charAt(z);

            text = res;
        }
    }

    return text;
}

function decrypt(encryptedText, n) {
    for (var x = 0; x < n; ++x) {
        var res = "";

        if (encryptedText.length % 2 == 0) {
            var inner = 0;
            var outer = encryptedText.length / 2;

            while (inner < encryptedText.length / 2 && outer < encryptedText.length) {
                res += encryptedText[outer];
                res += encryptedText[inner];
                ++outer;
                ++inner;
            }
        } else {
            var inner = 0;
            var outer = Math.floor(encryptedText.length / 2);

            while (inner < Math.floor(encryptedText.length / 2) || outer < encryptedText.length) {
                res += encryptedText[outer];
                /* In odd length strings, the string will always contain
                   1 more odd-indexed character than even-indexed's. */
                if (inner < Math.floor(encryptedText.length / 2))
                    res += encryptedText[inner];
                
                ++outer;
                ++inner;
            }
        }

        encryptedText = res;
    }

    return encryptedText;
}
/* end `wat solution` */