/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = function(head) {
  const list = [];
  while (head) {
    list.unshift(head.val);
    head = head.next;
  }
  return list;
};
