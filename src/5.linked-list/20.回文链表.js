/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  const list = [];
  let cur = head;
  while (cur) {
    list.push(cur.val);
    cur = cur.next;
  }

  for (let i = 0, j = list.length - 1; i < j; i++, j--) {
    if (list[i] !== list[j]) {
      return false;
    }
  }
  return true;
};
