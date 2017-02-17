function solution(list) {
    /* Iterate through the loop and brute-force it. */
    var res = "";
    var i = 0;

    while (i < list.length) {
        var j = i + 1;

        while (j < list.length) {
            if (list[j] === list[j - 1] + 1) {
                ++j;
            } else {
                break;
            }
        }

        if (j > i + 2) { // At least a range of 3.
            res += String(list[i]) + "-" + String(list[j - 1]) + ",";
            i = i + (j - i);
        } else {
            res += String(list[i]) + ",";
            ++i;
        }
    }

    if (res[res.length - 1] === ',')
        return res.substr(0, res.length - 1)

    return res;
}