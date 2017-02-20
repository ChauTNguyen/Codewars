function sumStrings(a, b) {
    var strA = a.split('').reverse();
    var strB = b.split('').reverse();
    // Assuming only positive integers,
    // the sum will always have either the same number of digits
    // or just 1 more.
    var sum = [];

    // Make sure both of the arrays are the same length.
    while (strA.length > strB.length)
        strB.push('0');

    while (strB.length > strA.length)
        strA.push('0');

    for (var i = 0; i < strA.length + 1; ++i)
        sum.push(0);
    
    for (var i = 0; i < strA.length; ++i) {
        var carry = sum[i];

        var total = (+strA[i]) + (+strB[i]) + carry;
        
        sum[i] = total % 10;
        carry = Math.floor(total / 10);

        if (carry)
            sum[i + 1] = carry;
    }
    
    while (sum[sum.length - 1] === 0)
      sum.pop();

    return sum.reverse().join('');
}