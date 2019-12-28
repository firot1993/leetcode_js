function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder==undefined || preorder.length == 0) return null;
    var rootNode = new TreeNode(preorder[0]);
    if (preorder.length == 1) return rootNode;
    var index = inorder.indexOf(preorder[0]);
    var leftinorder = inorder.slice(0, index);
    var rightinorder = inorder.slice(index + 1, inorder.length);
    var leftpreorder = preorder.slice(1, 1 + leftinorder.length);
    var rightpreorder = preorder.slice(1 + leftinorder.length, preorder.length);
    rootNode.left = buildTree(leftpreorder, leftinorder);
    rootNode.right = buildTree(rightpreorder, rightinorder);
    return rootNode;
};