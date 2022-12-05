export class Queue {
    constructor() {
        this.items = [];
    }

    enQueue(element) {
        this.items.push(element);
    }

    deQueue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length == 0;
    }
}
