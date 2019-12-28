/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    for (var x = 0; x < matrix.length; x++) {
        for (var y = 0; y < matrix[0].length; y++) {
            if (matrix[x][y] == 0) {
                dfs(x, y, matrix);
                setZero(x, y, matrix);
                return;
            }
        }
    }
};

var setZero = function (x, y, matrix) {
    for (var i = 0; i < matrix[0].length; i++) {
        matrix[x][i] = 0;
    }
    for (var i = 0; i < matrix.length; i++) {
        matrix[i][y] = 0;
    }
}

var dfs = function (x, y, matrix) {
    for (var i = y + 1; i < matrix[0].length; i++) {
        if (matrix[x][i] == 0) {
            dfs(x, i, matrix);
            setZero(x, i, matrix);
            return;
        }
    }
    for (var i = x + 1; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                dfs(i, j, matrix);
                setZero(i, j, matrix);
                return;
            }
        }
    }
}
