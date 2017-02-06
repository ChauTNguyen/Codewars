function dirReduc(arr) {
    /*
        Initial solution that uses `NULL` to indicate crossed out directions.
        Not the most elegant, but this is inspired by bubble sort's simple
        implementation. By setting `i < arr.length` as the condition, we guarantee
        that even if there is a really nested set of redundant directions, we will always
        reduce it completely. `arr.length` can be reduced for smaller cases, but my initial
        thoughts were to play it safe.
    */
    for (var i = 0; i < arr.length; ++i) {
        for (var j = 0; j < arr.length - 1; ++j) {
            if (arr[j] === "NORTH" && arr[j + 1] === "SOUTH" || arr[j] === "SOUTH" && arr[j + 1] === "NORTH") { 
                arr[j] = "NULL";
                arr[j + 1] = "NULL";
            } else if (arr[j] === "WEST" && arr[j + 1] === "EAST" || arr[j] === "EAST" && arr[j + 1] === "WEST") {
                arr[j] = "NULL";
                arr[j + 1] = "NULL";
            }
        }

        arr = arr.filter(function(v, i, arr) {
            return v !== "NULL";
        });
    }

    return arr;
}

function dirReduc(arr) {
    var opposites = { 'NORTH': 'SOUTH', 'WEST': 'EAST', 'EAST': 'WEST', 'SOUTH': 'NORTH' };
    
    return arr.reduce(function(dirs, dir) {
        if (dirs[dirs.length - 1] === opposites[dir])
            dirs.pop();
        else
            dirs.push(dir);
        return dirs;
    }, []);
}