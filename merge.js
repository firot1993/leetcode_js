/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return[intervals];
    intervals = intervals.sort((x,y)=>x[0]-y[0]);
    var ret = [];
    var [cx, cy] = intervals[0];
    for (var i = 1; i < intervals. length; i++){
        var [nx,ny] = intervals[i];
        if (nx <= cy){
            cy = Math.max(cy, ny);
        } else {
            ret.push([cx,cy]);
            cx = nx;
            cy = ny;
        }
    }
    ret.push([cx,cy])
    return ret;
};


var intervals = [[1,3],[2,6],[8,10],[15,18]];
var b = [[1,4],[4,5]];
var c = []
console.log(merge(c));

