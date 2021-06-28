/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function(head) {
  let cur = head;
  let num = '';
  while (cur) {
    num += cur.val;
    cur = cur.next;
  }
  return parseInt(num, 2);
};
