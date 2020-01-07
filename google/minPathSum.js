/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length==0 || grid[0].length ==0) return 0;
    var f = [];
    for (var i = 0; i < grid.length; i++){
        f.push([])
        for (var j = 0; j < grid[0].length; j++){
            if (i==0 && j==0) {
                f[i][j] = grid[i][j];
                continue;
            }
            f[i][j] = 0x7fffffff;
            if (i-1>=0) f[i][j] = Math.min(f[i][j], grid[i][j] + f[i-1][j]);
            if (j-1>=0) f[i][j] = Math.min(f[i][j], grid[i][j] + f[i][j-1]);
        }
    }
    return f[grid.length-1][grid[0].length-1]
};

var a = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(a));