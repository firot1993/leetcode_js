function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    var odd = undefined;
    var even = undefined;
    var oddh = undefined;
    var evenh = undefined;
    var count = 0;
    while (head!=null){
        count = (count + 1) % 2;
        if (count == 1){
            if (odd==undefined) {
                odd = head;
                head = head.next;
                oddh = odd;
            } else {
                odd.next = head;
                head = head.next;
                odd = odd.next;
            }
        } else {
            if (even==undefined){
                even = head;
                head = head.next;
                evenh = even;
            } else {
                even.next = head;
                head = head.next;
                even = even.next;
            }
        }
    }
    odd.next = evenh;
    even.next = null;
    return oddh;
};

var print = function(n){
    var count = 0;
    while (n!=null){
        console.log(n.val);
        n = n.next;
        count++;;
        // if (count==6) break;
    }
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
var f = new ListNode(6);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

// print(a);
print(oddEvenList(a));
