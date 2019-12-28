function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    var queue = [[root, 0]];
    var ret = [];
    var st = 0;
    while (queue.length > st) {
        [root,level] = queue[st];
        if (root==undefined) break;
        st++;
        if (root.left != undefined) queue.push([root.left, level + 1]);
        if (root.right != undefined) queue.push([root.right, level + 1]);
        if (ret[level] == undefined) {
            ret[level] = [];
        }
        if (level % 2 == 0) {
            ret[level].push(root.val);
        } else {
            ret[level] = [root.val].concat(ret[level]);
        }
    }
    return ret;
};

var a = new TreeNode(3)
var b = new TreeNode(9)
var c = new TreeNode(20)
var d = new TreeNode(15)
var e = new TreeNode(7)
a.left = b;
a.right = c;
c.left = d;
c.right = e;
console.log(zigzagLevelOrder(a));