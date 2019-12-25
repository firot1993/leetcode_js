/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function ListNode(val) {
    this.val = val;
     this.next = null;
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var ret = new ListNode(0);
    var current = ret;
    var sum = 0;
    var node0 = new ListNode(0);
    while (l1!=node0 || l2!=node0) {
        sum = l1.val + l2.val + current.val;
        current.val = sum % 10;
        current.next = new ListNode(parseInt(sum / 10));
        current = current.next;
        if (l1.next!=null) l1 = l1.next; else l1 = node0;
        if (l2.next!=null) l2 = l2.next; else l2 = node0;
    }
    current = ret;
    while (current.next!=null){
        if (current.next.val==0 && current.next.next==null){
            current.next = null;
            break;
        }
        current = current.next;
    }
    return ret;
};

var output = function(l){
    while (l!=null){
        console.log(l.val);
        l = l.next;
    }
}

var a = new ListNode(2)
var b = new ListNode(4)
var c = new ListNode(3)
a.next = b;
b.next = c;


var a1 = new ListNode(5)
var b1 = new ListNode(6)
var c1 = new ListNode(4)
a1.next = b1;
b1.next = c1;

output(addTwoNumbers(a,a1))
