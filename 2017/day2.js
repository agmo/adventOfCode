function calculateChecksumPart1(spreadsheet) {
    return spreadsheet.reduce(
        (accumulator, currentRow) => {
            return accumulator + Math.max.apply(null, currentRow) - Math.min.apply(null, currentRow);
        },
        0
    );
}

function calculateChecksumPart2(spreadsheet) {
    return spreadsheet.reduce(
        (accumulator, currentRow) => {
            for (let i = 0, length = currentRow.length; i < length; i++) {
                for (let j = i + 1; j < length; j++) {
                    const max = Math.max(currentRow[i], currentRow[j]);
                    const min = Math.min(currentRow[i], currentRow[j]);

                    if (max % min === 0) {
                        return accumulator + max / min;
                    }
                }
            }
        },
        0
    );
}