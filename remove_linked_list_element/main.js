/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let cursor = head
    while( cursor ){
        if( cursor.val === val ){
            head = head.next;
        }else if( cursor.next && cursor.next.val === val ){
            cursor.next = cursor.next.next;
        }
        cursor = cursor.next;
    }
    
    return head;
};