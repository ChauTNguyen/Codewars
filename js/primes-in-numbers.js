function primeFactors(n) {
    /*
        Still nearly as fast as the less verbose solution below, but this initial
        solution introduces too many unnecessary elements such as the dictionary.
    */
    var nums = {};

    for (var i = 2; i <= n; ++i) {
        while (n % i === 0 && n != 0) {
            n /= i;
            if (nums[i]) nums[i] += 1;
            else nums[i] = 1;
        }
    }

    if (Object.keys(nums).length === 0) return '(' + n + ')';

    var str = "";
    for (var key in nums) {
        var s = '(';
        if (nums[key] === 1) s += key;
        else s += key + "**" + nums[key];
        s += ')';
        str += s;
    }

    return str;
}

function primeFactors(n) {
    var res = "";

    for (var i = 2; i <= n; ++i) {
        var count = 0;

        while (n % i === 0)
            ++count;
            n /= i;
        
        res += count ? "(" + (count > 1 ? i + "**" + count : i) + ")" : "";
    }

    return res || '(' + n + ')';
}