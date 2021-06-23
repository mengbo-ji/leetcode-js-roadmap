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
 * @return {ListNode}
 */
const getKthFromEnd = function(head, k) {
  // const list = [];
  // while(head) {
  //     list.push(head.val);
  //     head = head.next;
  // }

  // let temp = list.slice(-k);
  // let newList = new ListNode();
  // let prev = newList;
  // temp.forEach(v => {
  //     const cur = new ListNode(v);
  //     prev.next = cur;
  //     prev = prev.next;
  // })
  // return newList.next;
  // 快慢指针法
  let fast = head;
  let slow = head;
  let n = 0;
  while (fast) {
    if (n >= k) {
      slow = slow.next;
    }
    fast = fast.next;
    n++;
  }
  return slow;
};
