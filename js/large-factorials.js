function factorial(n) {
    var digits = [1];
    var numOfDigits = 1;

    for (var i = 2; i <= n; ++i) {
        var carry = 0;

        for (var j = 0; j < numOfDigits; ++j) {
            var product = digits[j] * i;
            digits[j] = (product + carry) % 10;
            carry = Math.floor((product + carry) / 10);
        }

        while (carry) {
            digits[numOfDigits++] = carry % 10;
            carry = Math.floor(carry / 10);
        }
    }

    return digits.reverse().join('').substr(digits.length - numOfDigits, digits.length);
}