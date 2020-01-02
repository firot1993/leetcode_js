/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (word.length == 0) return true;
    var nextword = word.substr(1);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
           if (board[i][j] == word[0]){
               if (dfs(board, nextword, i, j)){
                   return true;
               }
           }
        }
    }
    return false;
};

var direction = [[0,1],[0,-1],[1,0],[-1,0]]

var dfs = function (board, word, i, j){
    if (word.length==0) return true;
    var ch = board[i][j];
    board[i][j] = -1;
    var nextword = word.substr(1);
    for (var [tx, ty] of direction){
        var nx = tx + i;
        var ny = ty + j;
        if (nx < 0 || ny < 0 || nx >= board.length || ny >= board[0].length) continue;
        if (word[0] == board[nx][ny] && dfs(board, nextword, nx, ny)){
            return true;
        }
    }
    board[i][j] = ch;
    return false;
}


var board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
var word = "ABCB"
console.log(exist(board, word))