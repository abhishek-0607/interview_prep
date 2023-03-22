var addTwoNumbers = function (l1, l2) {
  var head = new ListNode(0);
  var curr = head;

  var p1 = l1;
  var p2 = l2;
  var carry = 0;
  while (true) {
    if (p1 != null && p2 != null) {
      sum = carry + p1.val + p2.val;
      p1 = p1.next;
      p2 = p2.next;
    } else if (p1 != null) {
      sum = carry + p1.val;
      p1 = p1.next;
    } else if (p2 != null) {
      sum = carry + p2.val;

      p2 = p2.next;
    } else if (carry != 0) {
      sum = carry;
    }

    if (sum > 9) {
      curr.next = new ListNode(sum % 10);
      carry = 1;
    }
    if (sum <= 9) {
      curr.next = new ListNode(sum);
      carry = 0;
    }
    curr = curr.next;

    if (p1 == null && p2 == null && carry == 0) {
      break;
    }
  }

  return head.next;
};

function abc() {
  console.log(name);
  console.log(x);
  let x = "masai";
  var name = "xyz";
}

abc();
