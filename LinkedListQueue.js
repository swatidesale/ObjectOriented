/*
 * Data Structure for Queue Using Linked List.
 */
const Node = require('./Node.js');
module.exports = class LinkedListQueue {
    constructor() {
        this.rear = this.front = null;
    }

    isEmpty() {
        return (this.front == null);
    }

    enqueue(data) {
        let newnode = new Node(data);
        if(this.isEmpty()) {
            this.front = newnode;
            this.rear = newnode;
        } else {
            this.rear.next = newnode;
            this.rear = newnode;
        }
    }

    dequeue() {
        if(this.isEmpty()) {

        }
        else {
            var data = this.front.data;
            this.front = this.front.next;
            return data;
        }
    }
}