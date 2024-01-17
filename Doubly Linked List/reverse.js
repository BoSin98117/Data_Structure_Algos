class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
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
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // WRITE THE REVERSE METHOD HERE //
    // Define the 'reverse' method to reverse a doubly linked list.
    reverse() {
        // Start at the first node, known as the 'head'.
        let current = this.head;

        // Create a 'temp' variable set to null. 
        // We'll use this to temporarily store data.
        let temp = null;

        // Loop through each node in the list.
        // Continue as long as 'current' is not null.
        while (current !== null) {

            // Store the 'prev' pointer of the current node 
            // into 'temp'. This is like putting it in a safe box.
            temp = current.prev;

            // Now we swap the 'prev' and 'next' pointers. 
            // Make 'prev' point where 'next' was pointing.
            current.prev = current.next;

            // Make 'next' point where 'prev' was originally 
            // pointing, which we stored in 'temp'.
            current.next = temp;

            // Move to the next node in the original list.
            // Remember, 'prev' now holds the original 'next'.
            current = current.prev;
        }

        // We've reversed all the nodes. Now, let's switch the 
        // 'head' and 'tail'.

        // Store the original 'head' into 'temp'.
        temp = this.head;

        // Set the new 'head' to be the original 'tail'.
        this.head = this.tail;

        // Set the new 'tail' to be the original 'head', 
        // which we saved in 'temp'.
        this.tail = temp;
    }

}



let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log("Original list:");
myDoublyLinkedList.printList();

myDoublyLinkedList.reverse();
console.log("\nList after reversing:");
myDoublyLinkedList.printList();

// Create a new list with an even number of elements
let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal list 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.reverse();
console.log("\nList 2 after reversing:");
myDoublyLinkedList2.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    List after reversing:
    5
    4
    3
    2
    1
    Original list 2:
    1
    2
    3
    4
    5
    6
    List 2 after reversing:
    6
    5
    4
    3
    2
    1
*/
