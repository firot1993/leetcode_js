function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    var ret = [];
    var queue = [root];
    var st = 0;
    while (st < queue.length) {
        var current = queue[st];
        if (current != null) {
            ret.push(current.val);
            queue.push(current.left);
            queue.push(current.right);
        } else {
            ret.push(null);
        }
        st++;
    }
    var result = ret.join(',')
    for (var x = result.length -1; x >= 0; x--){
        if (result[x]!=",")  {
            return result.slice(0, x+1);
        }
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data == undefined || data == '') return null;
    console.log(data)
    var a = data.split(',');
    if (a[0] == null) return null;
    var root = new TreeNode(a[0]);
    var queue = [root];
    var st = 0;
    while (st < queue.length) {
        var current = queue[st];
        if (current != null) {
            if (a[queue.length] != undefined && a[queue.length] != '') {
                current.left = new TreeNode(a[queue.length]);
                queue.push(current.left);
            } else {
                queue.push(null);
            }
            if (a[queue.length] != undefined && a[queue.length] != '') {
                current.right = new TreeNode(a[queue.length]);
                queue.push(current.right);
            } else {
                queue.push(null);
            }
        }
        st++;
    }
    console.log(root);
    return root;
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
var d = new TreeNode(4);
var e = new TreeNode(5);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

var b  = serialize(a);
console.log(serialize(a))


var c = deserialize('1,2,3,,,4,5');
console.log(serialize(c))