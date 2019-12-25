function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var ret = []
    var nodes = []
    if (root==null) return ret;
    nodes.push([root,0])
    var st = 0;
    console.log(nodes);
    while (st < nodes.length){
        var [currentNode, level] = nodes[st]
        if (ret[level]==undefined) ret[level] = currentNode.val;
        if (currentNode.right!=null) nodes.push([currentNode.right, level+1]);
        if (currentNode.left!=null) nodes.push([currentNode.left, level+1]); 
        st++;
    }
    return ret;
};

var c5 = new TreeNode(5)
var c4 = new TreeNode(4)
var c3 = new TreeNode(3)
var c2 = new TreeNode(2)
var c1 = new TreeNode(1)


console.log(rightSideView(null))
