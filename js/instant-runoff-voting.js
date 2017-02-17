function runoff(voters) {
    // HACK workaround 'Object.values is not a function'
    if (!Object.values) Object.values = o => Object.keys(o).map(k => o[k]);

    if (!voters || voters.length === 0 || !voters[0].length) return undefined; 
    var min = Number.MAX_SAFE_INTEGER;

    var votes = {};

    for (var i = 0; i < voters.length; ++i)
        votes[voters[i][0]] = (votes[voters[i][0]] || 0) + 1;

    console.log(votes);
    for (var key in votes) {
        min = Math.min(min, votes[key]);
        if (votes[key] > voters.length / 2) return key;
    }

    return runoff(voters.map(function(arr) {
        return (arr.filter(function(e) {
            return votes[e] > min;
        }))
    }));
}