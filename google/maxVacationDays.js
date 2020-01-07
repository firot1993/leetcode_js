/**
 * @param {number[][]} flights
 * @param {number[][]} days
 * @return {number}
 */
var maxVacationDays = function (flights, days) {
    var f = [];
    f[0] = [];
    var ans = 0;
    for (var i = 0; i < flights.length; i++) {
        f[0][i] = (i==0 || flights[0][i]) ? days[i][0] : -1;
        ans = Math.max(f[0][i], ans);
    }
    for (var i = 1; i < days[0].length; i++) {
        f[i] = [];
        for (var j = 0; j < flights.length; j++) {
            f[i][j] = -1;
            for (var k = 0; k < flights.length; k++) {
                if (k == j || flights[j][k]) {
                    if (f[i - 1][k] != -1) {
                        f[i][j] = Math.max(f[i][j], f[i - 1][k] + days[j][i]);
                        ans = Math.max(f[i][j], ans);
                    }
                }
            }
        }
    }
    console.log(f);     
    return ans;
};

// flights = [[0, 1, 1], [1, 0, 1], [1, 1, 0]], days = [[7, 0, 0], [0, 7, 0], [0, 0, 7]]
// flights = [[0,0,0],[0,0,0],[0,0,0]], days = [[1,1,1],[7,7,7],[7,7,7]]
flights = [[0,1,1],[1,0,1],[1,1,0]], days = [[1,3,1],[6,0,3],[3,3,3]]
console.log(maxVacationDays(flights, days));