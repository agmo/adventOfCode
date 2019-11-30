function getValueInCircularBuffer(steps) {
    let insertions = 2017;
    let index = 0;
    const buffer = [0];
    let valueToInsert = 1;

    while (insertions > 0) {
        stepForward();
        insertValue();
        valueToInsert++;
        insertions--;
    }

    return buffer[index + 1];

    ////////////////////
    function stepForward() {
        index = ((index + steps) % buffer.length) + 1;
    }

    function insertValue() {
        buffer.splice(index, 0, valueToInsert);
    }
}