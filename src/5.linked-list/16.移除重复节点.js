/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeDuplicateNodes = function(head) {
  if (!head) return null;
  const set = new Set();
  set.add(head.val);

  let cur = head;
  while (cur.next) {
    if (set.has(cur.next.val)) {
      cur.next = cur.next.next;
    } else {
      set.add(cur.next.val);
      cur = cur.next;
    }
  }
  return head;
};
