/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    var row = matrix.length - 1;
    var col = 0;
    while (row >= 0 && col < matrix[0].length){
        if (matrix[row][col] > target) {
            row--;
        } else if (matrix[row][col] < target){
            col++;
        } else {
            return true;
        }
    }
    return false;
};

var times = 0; 
var erfen = function (matrix, target, rl, rr, cl, cr) {
    times++;
    console.log(times, rl,rr,cl,cr);
    if (rr == rl){
        if (matrix[rr][cl] > target) return false;
        if (matrix[rr][cr] < target) return false;
    }
    if (cl == cr){
        if (matrix[rl][cr] > target) return false;
        if (matrix[rr][cr] < target) return false;
    }
    if (rr - rl == 1) return erfen(matrix, target, rl, rl, cl, cr) || erfen(matrix, target, rr, rr, cl,cr);
    if (cr - cl == 1)  return erfen(matrix, target, rl, rr, cl, cl) || erfen(matrix, target, rl, rr, cr, cr); 
    var rmid = parseInt((rl + rr) / 2);
    var cmid = parseInt((cl + cr) / 2);
    if (matrix[rmid][cmid] > target) {
        if (cr != cmid && erfen(matrix, target, rl, rr, cl, cmid)) return true;
        if (rr != rmid && erfen(matrix, target, rl, rmid, cl, cr)) return true;
        return false;
    } else if (matrix[rmid][cmid] < target) {
        if (rmid != rl && erfen(matrix, target, rmid, rr, cl, cr)) return true;
        if (cmid != cl && erfen(matrix, target, rl, rr, cmid, cr)) return true;
        return false;
    } else {
        return true;
    }
}

var a = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];


console.log(searchMatrix(a,30))

var b = []
for (var i = 0; i < a.length; i++){
    b.push([])
    for (var j = 0; j < a[0].length; j++){
        b[i].push(searchMatrix(a, a[i][j]))
    }
}


console.log(b);
