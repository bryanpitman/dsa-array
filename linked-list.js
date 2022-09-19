/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length + 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
    newNode.next = this.head;
    this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null) {
      throw new Error("empty list");
    }
    const poppedValue = this.tail;

    //if there is only one
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedValue.val;
    } else {
      let current = this.head;
      while (current !== this.tail) {
        if (current.next === this.tail) {
          this.tail = current;
          current.next = null;
          this.length--;
          return poppedValue.val;
        } else {
          current = current.next;
        }
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      throw new Error("empty list");
    }
    const shiftValue = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return shiftValue.val;
    } else {
      this.head = this.head.next;
      this.length--;
      return shiftValue.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("index does not exist");
    }
    let currIdx = 0;
    let current = this.head;
    while (currIdx <= idx) {
      if (currIdx === idx) {
        return current.val;
      } else {
        current = current.next;
        currIdx++;
      }
    }
  }
  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("invalid index");
    }
    
    let currIdx = 0;
    let current = this.head;

    while (currIdx <= idx) {
      if (currIdx === idx) {
        current.val = val;
      }
      current = current.next;
      currIdx++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("invalid index");
    }
    
    let newNode = new Node(val);
    
    let currIdx = 0;
    let current = this.head;
    
    if(idx === 0) {
      this.unshift(val);
      return;
    }
    
    if(idx === this.length) {
      this.push(val);
      return;
    }

    while (currIdx < idx) {
      if (currIdx + 1 === idx) {
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        break;
      }
      current = current.next;
      currIdx++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("invalid index");
    }
    
    let currIdx = 0;
    let current = this.head;
    
    if(idx === 0) {
      return this.shift();
    }
    
    if(idx === this.length - 1) {
      return this.pop();
    }

    while (currIdx <= idx) {
      if (currIdx + 1 === idx) {
        const removed = current.next.val;
        current.next = current.next.next;
        this.length--;
        return removed;
      }
      current = current.next;
      currIdx++;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.head === null) return 0;
    
    let current = this.head;
    let total = 0;
    for(let i = 0; i < this.length; i++) {
      total += current.val;
      current = current.next;
    }
    
    return total / this.length;
  }
}

module.exports = LinkedList;
