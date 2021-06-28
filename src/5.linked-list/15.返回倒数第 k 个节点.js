/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
const kthToLast = function(head, k) {
  // 快慢指针
  let fast = head;
  let slow = head;
  let index = 0;
  while (fast) {
    if (index >= k) {
      slow = slow.next;
    }
    fast = fast.next;
    index++;
  }
  return slow.val;
};
