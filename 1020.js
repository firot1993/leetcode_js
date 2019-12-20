/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function (A) {
    var f = [];
    var ready = [];
    for (i in A) {
        f.push([]);
        for (j in A[i]) {
            if (i == 0 || j == 0 || i == A.length - 1 || j == A[i].length - 1) {
                if (A[i][j] == 1) {
                    f[i].push(1);
                    ready.push([parseInt(i), parseInt(j)]);
                } else {
                    f[i].push(0);
                }
            } else {
                f[i].push(0);
            }
        }
    }
    ready.forEach(function (point) {
        dfs(point, f, A);
    })
    var result = f.map((row, i) => row.map((column, j) => f[i][j] == 0 && A[i][j] == 1 ? 1 : 0));
    // var ret = result.flat(2).reduce((acc, x) => acc + x);
    var ret = 0;
    result.forEach(column=>{
        column.forEach(row=>{
            ret = ret + row;
        })
    })
    return ret;
};


var dfs = function (point, f, A) {
    direction.forEach(function (offset) {
        var np = point.map((x, i) => x + offset[i]);
        var [x, y] = np
        if (x >= 0 && x < A.length && y >= 0 && y < A[0].length) {
            if (f[x][y] == 0 && A[x][y] == 1) {
                f[x][y] = 1;
                dfs(np, f, A);
            }
        }
    })
}

