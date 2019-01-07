function LinkedListNode(value) {
    this.next = null;
    this.previous = null;
    this.nodeValue = value;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
    this.count = 0;
}

LinkedList.prototype.addLast = function (node) {
    if (this.count === 0) {
        this.head = node;
    } else {
        this.tail.next = node;
        node.previous = this.tail;
    }

    this.tail = node;
    this.count++;
};

LinkedList.prototype.triggerPolymerReactionWithPolarity = function () {
    let current = this.head.next; // Start with the second polymer element and compare backwards.
    let previous = current.previous;

    while (current) {
        // Capital letters char code range: 65-90, small letter char code range: 97-122.
        // Small letter code - 32 = capital letter code.
        const isSmallLetter = current.nodeValue.charCodeAt(0) >= 97;

        if ((isSmallLetter && current.nodeValue.charCodeAt(0) === previous.nodeValue.charCodeAt(0) + 32) ||
            current.nodeValue.charCodeAt(0) + 32 === previous.nodeValue.charCodeAt(0)) {

            this.count -= 2;

            if (!previous.previous) { // It was the head, e.g. aAbcd (previous is 'a').
                this.head = current.next;
                this.head.previous = null;
                current = this.head.next;
                previous = current.previous;
                continue;
            }

            if (!current.next) { // It was the tail, e.g. bcdAa (current is 'a').
                this.tail = previous.previous;
            }

            previous = previous.previous;
            current = current.next;

            if (previous) {
                previous.next = current;
            }

            if (current) {
                current.previous = previous;
            }
        } else {
            previous = current;
            current = current.next;
        }
    }

    return this.count;
};

function reactPolymer(polymerString) {
    const linkedList = new LinkedList();

    for (const mockPolymerElement of polymerString) {
        linkedList.addLast(new LinkedListNode(mockPolymerElement));
    }

    return linkedList.triggerPolymerReactionWithPolarity();
}

function reactPolymerRegardlessOfPolarity(polymerString, unitTypes) {
    let results = [];

    unitTypes.forEach(unitType => {
        const regex = new RegExp(`${unitType}`,'gi');
        const strippedPolymerString = polymerString.replace(regex, '');
        const linkedList = new LinkedList();

        for (const polymerElement of strippedPolymerString) {
            linkedList.addLast(new LinkedListNode(polymerElement));
        }

        results.push(linkedList.triggerPolymerReactionWithPolarity());
    });

    return Math.min(...results);
}