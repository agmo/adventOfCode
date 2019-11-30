function countUsedSquaresPart1(key) {
    let rows = 128;
    let totalUsedSquares = 0;

    for (let i = 0; i < rows; i++) {
        const knotHash = makeKnotHash(256, key + '-' + i); //For 'makeKnotHash' see Day 10.

        for (let hexDigit of knotHash) {
            const binary = convertHexToBinary(hexDigit);
            const usedSquaresInRow = countOnes(binary);
            totalUsedSquares += usedSquaresInRow;
        }
    }

    return totalUsedSquares;

    //////////////////////////////
    function convertHexToBinary(hex) {
        return Number.parseInt(hex, 16).toString(2);
    }

    function countOnes(binary){
        let count = 0;

        for (let digit of binary) {
            if (digit === '1') {
                count++;
            }
        }

        return count;
    }
}
