/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  const list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }
  const len = list.length;
  for (let i = 0, j = len - 1; i < j; i++, j--) {
    if (list[i] !== list[j]) {
      return false;
    }
  }
  return true;
};
