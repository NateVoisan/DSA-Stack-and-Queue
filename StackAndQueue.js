'use strict';

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === nul) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack) {
    return stack.top.data;
}

function isEmpty(stack) {
    if (stack.top === null) {
        return true;
    }
    return false;
}

function display(stack) {
    let currentTop = stack.top;
    while(currentTop !== null) {
        console.log(currentTop.data);
        currentTop = currentTop.next;
    }
}

function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let newStack = new Stack();
    let newWord = '';

    for (let i = 0; i < s.length; i++) {
        newStack.push(s[i]);
    }
    for (let i = 0; i < s.length; i++) {
        newWord = newWord + newStack.pop();
    }
    console.log(newWord);

    if (newWord === s) {
        return true;
    }
    return false;
}

function matchingParens(str) {
    let tempStack = new Stack();
    let openCounter = 0;
    let closeCounter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            openCounter++;
        } else if (str[i] === ')') {
            closeCounter++;
        }
        tempStack.push(str[i]);
    }

    if (openCounter > closeCounter) {
        let mistakes = openCounter - closeCounter;
        let ignore = openCounter - mistakes;
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (tempStack.pop() === '(') {
                count++;
                if (count > ignore) {
                    console.log('You have an extra opening parenthesis at position', str.length - i);
                }
            }
        }
    } else if (closeCounter > openCounter) {
        let mistakes = closeCoutner - openCounter;
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (tempStack.pop() === '(') {
                count++;
                if (coutn <= mistakes) {
                    console.log('You have an extra closing parenthesis at position', str.length - i);
                }
            }
        }
    } else {
        console.log('You have not made a mistake.')
    }
    return;
}

function sort(stack) {
    let tempStack = new Stack();
    let initialStack = new Stack();
    let temp = 0;
    
    for(let i = 0; i < stack.length; i++) {
        initialStack.push(stack[i]);
    }

    while(initialStack.top !== null) {
        temp = initialStack.pop();

        if(tempStack.top === null) {
            if(peek(initialStack) < temp) {
                tempStack.push(initialStack.pop());
                tempStack.push(temp);
            } else {
                tempStack.push(temp);
            }
        } else {
            while(temp < peek(tempStack)) {
                initialStack.push(tempStack.pop());
                if(tempStack.top === null) break;
            }
            tempStack.push(temp);
        }
    }
    while(tempStack.top !== null) {
        initialStack.push(tempStack.pop());
    }
    return initialStack;
}

function queFromStacks(que) {
    let initStack = new Stack();
    let finStack = new Stack();

    for (let i = 0; i < que.length; i++) {
        initStack.push(que[i])
    }

    for (let j = 0; j < que.length; j++) {
        finStack.push(initStack.pop());
    }
    display(finStack);
}
queFromStacks('hello');

function main() {
    let starTrek = new Stack();

    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    console.log(peek(starTrek));
    console.log(isEmpty(starTrek));
    console.log(display(starTrek));

    matchingParens('afef(a((())))))');

    display((sort([8, 1, 190, 15, 2, 29, 3, 5, 4, 10, 5000])));
}
main();