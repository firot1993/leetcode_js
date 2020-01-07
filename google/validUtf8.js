/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
    var st = 0;
    while (st < data.length) {
        var current = data[st];
        var top = 128;
        var cl = 0;
        while ((current & top) > 0) {
            cl++;
            top = top >> 1;
        }
        console.log(cl);
        if (cl == 0) {
            st++;
        } else if (cl==1){
            return false;
        } else {
            console.log(cl);
            cl = cl - 1;
            while (cl > 0 && st < data.length){
                st++;
                if (st==data.length) break;
                if (data[st] < 128 || data[st] > 192) return false;
                cl--;
            }
            if (cl > 0) return false;
            st++;
        }
    }
    return true;
};

console.log(validUtf8([250,145,145,145,145]));
