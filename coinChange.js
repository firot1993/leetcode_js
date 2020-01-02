/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var f = [];
    f[0] = 0;
    for (var i = 0; i <= amount; i++){
        for (var j = 0; j < coins.length; j++){
            if (f[i - coins[j]]!=undefined) {
                var tmp = f[i-coins[j]] + 1;
                if (f[i] == undefined) f[i] = tmp;
                f[i] = Math.min(f[i], tmp);
            }
        }
    }
    console.log(f)
    return f[amount] == undefined? -1 : f[amount];
};