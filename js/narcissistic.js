function narcissistic(value) {
    var sum = 0;
    var strValue = value.toString();

    for (var i = 0; i < strValue.length; ++i)
        sum += Math.pow(strValue.charAt(i), strValue.length);

    return (sum === parseInt(strValue));
}

function narcissistic(value) {
    return ('' + value).split('').reduce(function(total, num) {
        return total += Math.pow(parseInt(num), ('' + value).length)
    }, 0) === (value);
}

const narcissistic = n => ('' + n)
                            .split('')
                            .reduce(
                                (s, x) => s += Math.pow(x - '0', ('' + n).length), 0
                                ) === n; // Can replace any type coersion with proper methods.