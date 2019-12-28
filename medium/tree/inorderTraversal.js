 function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
 }


var inorderTraversal = function(root) {
    var stack = [];
    var ret = [];
    stack.push(root);
    while ((root = stack.pop()) != undefined){
        if (root.right != null) stack.push(root.right);
        if (root.left == null) {
            ret.push(root.val);
        } else {
            stack.push(new TreeNode(root.val));
            stack.push(root.left);
        }
    }
    return ret;
};


var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
a.right = b;
b.left = c;
console.log(inorderTraversal(a));