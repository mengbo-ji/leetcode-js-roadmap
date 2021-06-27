/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const deleteNode = function(head, val) {
  if (head.val === val) {
    return head.next;
  }
  let cur = head;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      return head;
    }
    cur = cur.next;
  }
  return head;
};
