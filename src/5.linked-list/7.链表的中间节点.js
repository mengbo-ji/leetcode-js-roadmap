/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
  // let list = [];
  // while(head) {
  //     list.push(head);
  //     head = head.next;
  // }
  // let len = list.length;
  // let index = len % 2 === 0 ? len / 2 : (len - 1) / 2;
  // return list[index];
  // 快慢指针，fast一次走两步 slow一次走一步 当fast到达结尾的时候 slow一定走了一半
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
