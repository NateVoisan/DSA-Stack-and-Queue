'use strict';

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
            node.prev = this.last;
        }
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        if (node === this.last) {
            this.last = null;
            this.first = null;
        } else {
            this.first = this.first.next;
            this.first.prev = null;
        }
        return node.value;
    }
}

function peek(q) {
    return q.first.value;
}

function isEmpty(q) {
    if (q.first === null) {
        return true;
    }
    return false;
}

function display(q) {
    let currentChar = q.first;
    while (currentChar !== null) {
        console.log(currentChar.value);
        currentChar = currentChar.next;
    }
}

function main() {
    let starTreq = new Queue();

    starTreqQ.enqueue('kirk');
    starTreqQ.enqueue('Spock');
    starTreqQ.enqueue('Uhura');
    starTreqQ.enqueue('Sulu');
    starTreqQ.enqueue('Checkov');

    bank(15);
}
main();

function dancingPartners(que) {
    let spares = new Queue();
    for (let i = 0; i < que.length; i++) {
        if (spares.first !== null && spares.first.value !== que[i][0]) {
            spares.dequeue();
        } else if (i === que.length -1) {
            spares.enqueue(que[i][0]);
            i++;
        } else if (que[i][0] !== que[i + 1][0]) {
            i++;
        } else {
            spares.enqueue(que[i][0]);
        }
    }
    display(spares);
}

dancingPartners ([
    ['F', 'Jane'],
    ['M', 'John'], 
    ['M', 'Frank'], 
    ['M', 'Sherlock'], 
    ['F', 'Madonna'],
    ['M', 'David'],
    ['M', 'Christopher'],
    ['F','Beyonce']
])

function bank(num) {
    let line = new Queue();
    for (let i = 0; i < num; i++) {
        line.enqueue(i);
    }
    while (line.first !== null) {
        let success = Math.floor(Math.random() * 4);
        if (success === 0) {
            console.log(peek(line), ' did not have the correct paperwork.');
            line.enqueue(line.dequeue());
        } else {
            console.log(peek(line), ' was served.');
            line.dequeue();
        }
    }
    return;
}