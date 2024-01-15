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

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    // WRITE THE REMOVEDUPLICATES METHOD HERE // 
    removeDuplicates() {
        // Create a Set to store unique values
        const values = new Set();
        // Initialize previous pointer as null
        let previous = null;
        // Initialize current pointer at head
        let current = this.head;

        // Iterate through the list
        while (current !== null) {
            // If value already exists in the set
            if (values.has(current.value)) {
                // Remove the duplicate node by updating previous' next
                previous.next = current.next;
                // Decrement list length
                this.length -= 1;
            } else {
                // Add unique value to the set
                values.add(current.value);
                // Update previous pointer to current node
                previous = current;
            }
            // Move current pointer to the next node
            current = current.next;
        }
    }

}



let myLinkedList = new LinkedList(5);
myLinkedList.push(5);
myLinkedList.push(2);
myLinkedList.push(2);
myLinkedList.push(1);


console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList.printList();



/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    3
    4
    5
    5
    List after removing duplicates:
    1
    2
    3
    4
    5

*/
