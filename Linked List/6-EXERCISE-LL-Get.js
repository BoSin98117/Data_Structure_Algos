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

    /// WRITE GET METHOD HERE ///
    get(index) {
        // We cannot get an index that is less than 0.
        // We cannot get an index that is greater than or equal to the length of the list.
        if (index < 0 || index >= this.length) return undefined;
        // In order to return a node, we need to assign the node a value.  In this case we are assigning that node a value of TEMP.
        // We want to iterate through the list starting at the beginning so we set the TEMP = HEAD.
        let temp = this.head;
        // For loop will stop once we reach our node's index.
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        // Once the for loop exits, we return the TEMP which is the node we were looking for.
        return temp;
    }


}


function test() {
    let myLinkedList = new LinkedList(0);
    myLinkedList.push(11);
    myLinkedList.push(22);
    myLinkedList.push(33);

    console.log(myLinkedList.get(3).value);
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    3

*/