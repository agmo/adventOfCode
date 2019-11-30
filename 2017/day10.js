function multiplyFirstTwoNumbersInKnotHashedList(listSize, lengthsSequence) {
    const list = [...Array(listSize).keys()];
    let listIndex = 0;
    let skipSize = 0;

    for (let i = 0, length = lengthsSequence.length; i < length; i++) {
        const sublistLength = lengthsSequence[i];
        reverseSublist(sublistLength);
        listIndex = (listIndex + sublistLength + skipSize) % listSize;
        skipSize++;
    }

    function reverseSublist(sublistLength) {
        for (let i = 0, length = Math.trunc(sublistLength / 2); i < length; i++) {
            [list[(listIndex + i) % listSize], list[(listIndex - i + sublistLength - 1) % listSize]] =
                [list[(listIndex - i + sublistLength - 1) % listSize], list[(listIndex + i) % listSize]];
        }
    }

    return list[0] * list[1];
}

function makeKnotHash(listSize, lengthsSequenceAsString) {
    const asciiCodes = convertStringToAscii(lengthsSequenceAsString);
    const lengthsSequenceAsArray = appendStandardSuffix(asciiCodes);
    const sparseHash = generateSparseHash(lengthsSequenceAsArray);
    const denseHash = generateDenseHash(sparseHash);

    return denseHash.join('');

    /////////////////////////
    function appendStandardSuffix(arrayToAppendTo) {
        const standardSuffix = [17, 31, 73, 47, 23];
        return [...arrayToAppendTo, ...standardSuffix];
    }

    function convertStringToAscii(string) {
        let ascii = [];

        for (let char of string) {
            ascii.push(char.charCodeAt(0));
        }

        return ascii;
    }

    function generateSparseHash(lengthsSequence) {
        const list = [...Array(listSize).keys()];
        let listIndex = 0;
        let skipSize = 0;
        let rounds = 64;

        while (rounds) {
            for (let i = 0, length = lengthsSequence.length; i < length; i++) {
                const sublistLength = lengthsSequence[i];
                reverseSublist(sublistLength);
                listIndex = (listIndex + sublistLength + skipSize) % listSize;
                skipSize++;
            }

            rounds--;
        }

        function reverseSublist(sublistLength) {
            for (let i = 0, length = Math.trunc(sublistLength / 2); i < length; i++) {
                [list[(listIndex + i) % listSize], list[(listIndex - i + sublistLength - 1) % listSize]] =
                    [list[(listIndex - i + sublistLength - 1) % listSize], list[(listIndex + i) % listSize]];
            }
        }

        return list;
    }



    function generateDenseHash(sparseHash) {
        const blockSize = 16;
        let denseHash = [];

        for (let i = 0; i < sparseHash.length; i += blockSize) {
            let xored = 0;

            for (let y = 0; y < blockSize; y++) {
                xored = xored ^ sparseHash[i + y];
            }

            const hex = xored.toString(16).length === 1 ? '0' + xored.toString(16) : xored.toString(16);

            denseHash.push(hex);
        }

        return denseHash;
    }
}