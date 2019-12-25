function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    var odd = head;
    var even = new ListNode();
    var todd=  odd;
    var teven = even;
    var isOdd = 0;
    head = head.next;
    while (head.next){
        if (isOdd == 1){
            todd.next = head;
            todd = todd.next;
        } else {
            teven = head;
            teven = teven.next;
        }
    }    
    
};