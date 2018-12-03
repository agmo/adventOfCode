function findFrequencyPart1(sequence) {
    const toArr = sequence.split(', ').map(value => Number.parseInt(value));

    return toArr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function findFrequencyPart2(sequence) {
    let accumulator = 0;
    let foundRepeated = false;
    const previousFrequencies = new Set();
    let repeatedFrequency;
    const toArr = sequence.split(', ').map(value => Number.parseInt(value));

    previousFrequencies.add(accumulator);

    do {
        for (let i = 0; i < toArr.length; i++) {
            accumulator += toArr[i];

            if (previousFrequencies.has(accumulator)) {
                foundRepeated = true;
                repeatedFrequency = accumulator;
                break;
            }

            previousFrequencies.add(accumulator);
        }
    } while (!foundRepeated);

    return repeatedFrequency;
}