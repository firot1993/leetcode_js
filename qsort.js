var qsort = function (arr) {
    if (arr.length <= 1) return arr;
    var x = arr[0];
    var arrl = [], arrr = [];
    for (var i = 1; i < arr.length; i++) {
        var v = arr[i];
        if (v < x) arrl.push(v); else arrr.push(v);
    }
    return [qsort(arrl), x, qsort(arrr)].flat(2);
}

var qsort = function (a, l, r) {
    var mid = (l + r) % 2 == 0 ? (l + r) / 2 : (l + r + 1) / 2;
    var mid_num = a[mid];
    var i = l, j = r;
    while (i < j){
        while (a[i] < mid_num) i++;
        while (a[j] > mid_num) j--;
        if (i<=j){
            var t = a[i];
            a[i] = a[j];
            a[j] = t;
            i++;
            j--;
        }
    }    
    if (l < j) qsort(a,l,j);
    if (r > i) qsort(a,i,r);   
}

var a = [2,3,4,1,2,5];
console.log(a);
qsort(a,0,5)