var direction = [[0, -1], [-1, 0], [1, 0], [-1, 0]];
var parent = [];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    var queue = [];
    var parent = [];
    for (var i = 0; i < grid.length; i++) {
        parent.push([]);
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                queue.push([i, j]);
            }
        }
    }
    var st = 0;
    while (st < queue.length) {
        var [x, y] = queue[st];
        for (var i = 0; i < direction.length; i++) {
            var nx = x + direction[i][0];
            var ny = y + direction[i][1];
            if (nx <0 || ny <0 || nx>= grid.length || ny >= grid[0].length) continue;
            if (grid[nx][ny] == '1') {
                if (parent[nx][ny] == undefined) queue.push([nx, ny]); else
                    parent[x][y] = parent[nx][ny];
            }
        }
        if (parent[x][y] == undefined) {
            parent[x][y] = [x, y]
            queue.push([x,y]);
        }
        st++;
    }
    console.log(queue)

    console.log(parent);
    return 0;
};



var a = [["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]]
console.log(numIslands(a))