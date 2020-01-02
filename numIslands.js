/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function (grid) {
//     if (grid.length == 0) return 0;
//     var direction = [[0, -1], [0,1],[1,0],[-1,0]];
//     var queue = [];
//     var parent = [];
//     var tx = grid.length;
//     var ty = grid[0].length;

//     for (var i = 0; i < grid.length; i++) {
//         parent.push([]);
//         for (var j = 0; j < grid[0].length; j++) {
//             if (grid[i][j] == '1') {
//                 queue.push([i, j]);
//                 parent[i][j]  = i *  ty + j;
//             }
//         }
//     }
//     var st = 0;
//     while (st < queue.length) {
//         var [x, y] = queue[st];
//         for (var i = 0; i < direction.length; i++) {
//             var nx = x + direction[i][0];
//             var ny = y + direction[i][1];
//             if (nx <0 || ny <0 || nx>= grid.length || ny >= grid[0].length) continue;
//                 if (parent[nx][ny] != undefined){
//                  if (parent[x][y] > parent[nx][ny]) {
//                         parent[nx][ny] = parent[x][y];
//                         queue.push([nx,ny]);
//                     }
//                 }
//         }
//         st++;
//     }
//     var a = [], ans = 0;
//     for (var i = 0; i < grid.length; i++) {
//         for (var j = 0; j < grid[0].length; j++) {
//             if (parent[i][j]!=undefined && a[parent[i][j]]==undefined){
//                 a[parent[i][j]] = true;
//                 ans++;
//             }
//         }
//     }
//     return ans;
// };



// var numIslands = function (grid) {
//     if (grid.length == 0) return 0;
//     var direction = [[0, -1], [0, 1], [1, 0], [-1, 0]];
//     var queue = [];
//     var parent = [];
//     var ans = 0;
//     for (var i = 0; i < grid.length; i++) {
//         for (var j = 0; j < grid[0].length; j++) {
//             if (grid[i][j] == '1') {
//                 var queue = [[i, j]];
//                 grid[i][j] = '2'
//                 var st = 0;
//                 ans++;
//                 while (st < queue.length) {
//                     var [x, y] = queue[st];
//                     st++;
//                     for (var [ix, iy] of direction) {
//                         var nx = x + ix, ny = y + iy;
//                         if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) continue;
//                         if (grid[nx][ny]=='1'){
//                             queue.push([nx, ny]);
//                             grid[nx][ny] = '2';
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return ans;
// };


var findRoot = function(parent, x){
    if (parent[x] != x) return findRoot(parent, parent[x]);
    return parent[x];
}

var numIslands = function(grid){
    var parent = [], rank=[];
    var direction = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    var tx = grid.length, ty = grid[0].length;
    var ans = 0;
    for (var i = 0; i < grid.length; i++){
        for (var j = 0; j < grid[0].length; j++){
            if (grid[i][j] == '1'){
                parent[i * tx + j] = i * tx + j;
                rank[i * tx + j] = 1;
                ans++;
            }
        }
    }
    for (var i = 0; i< tx; i++){
        for (var j = 0; j < ty; j++){
            if (grid[i][j] == '1'){
                grid[i][j] = '0';
                var current = i * tx + j;
                for (var [ix, iy] of direction){
                    var nx = ix + i;
                    var ny = iy + j;
                    if (nx < 0 || ny < 0 || nx >= tx || ny >= ty) continue;
                    if (grid[nx][ny]!='1') continue;
                    var next = nx * tx + ny;
                    var parentCurrent = findRoot(parent, current);
                    var parentNext = findRoot(parent, next);
                    if (parentCurrent != parentNext) {
                        if (rank[parentCurrent] > rank[parentNext]) parent[parentNext] = parentCurrent; else
                        if (rank[parentCurrent] < rank[parentNext]) parent[parentCurrent] = parentNext; else{
                            parent[parentNext] = parentCurrent;
                            rank[parentCurrent]++;
                        }
                        ans--;
                    }
                }
            }
        }
    }
    return ans;
}

var grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
console.log(numIslands(grid));