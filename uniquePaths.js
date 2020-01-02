/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var ret = [];
    for (var i = 0; i < m; i++) {
        ret.push([]);
        for (var j = 0; j < n; j++) {
            ret[i][j] = 0;
            if (i > 0) ret[i][j] += ret[i - 1][j];
            if (j > 0) ret[i][j] += ret[i][j - 1];
        }
    }
    return ret[m-1][n-1];
};