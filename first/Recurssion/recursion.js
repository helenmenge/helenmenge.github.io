"use strict";

/* global exports */
/* You need the module.exports when testing in node.
  Comment it out when you send your file to the
   browser 
*/
module.exports = { sumTo, factorial, fibonacci,
    linkedList}; 

     function sumTo(n) {
        if (n == 0)
            return 0;
        return n + sumTO(n - 1);
    }


     function factorial(n) {
        if (n == 1)
            return 1;
        return n * factorial(n - 1);
    }

    function fibonacci(n) {
        if (n == 0)
            return 0;
        if (n == 1)
            return 1;
        let number = fibonacci(n - 1) + fibonacci(n - 2);
        return number;
    }

    function linkedList() {
        let list = { value: 1 };
        list.next = { value: 2 };
        list.next.next = { value: 3 };
        list.next.next.next = { value: 4 };
        list.next.next.next.next = null;
        console.log(list);
    }
    linkedList();

    function linkedListRevers() {
        let list = { value: 1 };
        list.next = { value: 2 };4
        list.next.next = { value: 3 };
        list.next.next.next = { value: 4 };
        list.next.next.next.next = null;
       
       let newlist =list.next.next.next;
       newlist.next=list.next.next;
       newlist.next.next=list.next;
       newlist.next.next.next=list;
       newlist.next.next.next.next=null;
        console.log(newlist);
    }
    linkedListRevers();
    