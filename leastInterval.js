/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    var x = [];
    for (var ch of tasks){
        var index = ch.charCodeAt() - 'A'.charCodeAt();
        if (x[index] == undefined) x[index] = 0;
        x[index]++; 
    }
    x.sort((a,b)=>a-b)

    var max = x.pop()-1, ans = max * n;
    while ((t=x.pop())!=undefined){
        ans = ans - Math.min(t, max);
    }
    if (ans > 0) ans = ans + tasks.length; else ans = tasks.length;
    return ans;
};

console.log(leastInterval(["A","A","A","B","B","B"], 2));