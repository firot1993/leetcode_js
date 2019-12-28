function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    var preorder = buildpreorder(root);
    console.log(preorder)
    return preorder[k - 1];
};

var buildpreorder = function (root) {
    if (root == undefined) return [];
    return buildpreorder(root.left).concat([root.val]).concat(buildpreorder(root.right));
}

var a = new TreeNode(3);
var b = new TreeNode(1);
var c = new TreeNode(4);
var d = new TreeNode(2);
a.left = b;
b.right = d;
a.right = c;
console.log(kthSmallest(a, 1));