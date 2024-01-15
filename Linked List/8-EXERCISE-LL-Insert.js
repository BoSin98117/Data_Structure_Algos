class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    /// WRITE INSERT METHOD HERE ///
    insert(index, value) {
        // If we are trying to insert a node into an invalid index of the linked list, then return false.
        if (index < 0 || index > this.length) return false;
        // If we are inserting a node to the end of the list, use the push() method.
        if (index === this.length) return this.push(value);
        // If we are inserting a node to the beginning of the list, use the unshift() method.
        if (index === 0) return this.unshift(value);

        // Create a newNode.
        const newNode = new Node(value);
        // TEMP is the node located right before the index of where we are trying to insert the newNode.
        const temp = this.get(index - 1);
        // Set the newNode.next value to be temp.next.
        newNode.next = temp.next;
        // Now our temp.next will point to the newNode.
        temp.next = newNode;
        // Increase the length of the list.
        this.length++;
        return true;
    }

}


function test() {

    let myLinkedList = new LinkedList(1);
    myLinkedList.push(3);

    console.log("LL before insert():");
    myLinkedList.printList();

    myLinkedList.insert(1, 2);

    console.log("\nLL after insert(2) in middle:");
    myLinkedList.printList();

    myLinkedList.insert(0, 0);

    console.log("\nLL after insert(0) at beginning:");
    myLinkedList.printList();

    myLinkedList.insert(4, 4);

    console.log("\nLL after insert(4) at end:");
    myLinkedList.printList();

}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    LL before insert():
    1
    3

    LL after insert(2) in middle:
    1
    2
    3

    LL after insert(0) at beginning:
    0
    1
    2
    3

    LL after insert(4) at end:
    0
    1
    2
    3
    4

*/