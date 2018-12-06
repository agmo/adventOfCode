function calculateChecksum(boxIDs) {
    let pairCount = 0;
    let tripletCount = 0;

    boxIDs.forEach(idSet => {
        const store = new Map();
        let pairFound = false;
        let tripletFound = false;

        for (let letter of idSet) {
            if (!store.has(letter)) {
                store.set(letter, 1);
            } else {
                const newValue = store.get(letter) + 1;
                store.set(letter, newValue);
            }
        }

        for (let letterCount of store.values()) {
            if (pairFound && tripletFound) {
                break;
            }

            if (letterCount === 2 && !pairFound) {
                pairFound = true;
                pairCount++;
            }

            if (letterCount === 3 && !tripletFound) {
                tripletFound = true;
                tripletCount++;
            }
        }
    });

    return pairCount * tripletCount;
}

function findCommonLetters(boxIDs) {
    let diffCount = 0;
    let matchingIds = [];

    outer:
    for (let i = 1; i < boxIDs.length - 1; i++) {
        for (let j = i + 1; j < boxIDs.length; j++) {
            for (let k = 0; k < boxIDs[i].length; k++) {
                if (boxIDs[i].charAt(k) !== boxIDs[j].charAt(k)) {
                    diffCount++;
                }

                if (diffCount > 1) {
                    diffCount = 0;
                    break;
                }
            }

            if (diffCount === 1) {
                matchingIds.push(boxIDs[i]);
                matchingIds.push(boxIDs[j]);
                break outer;
            } else {
                diffCount = 0;
            }
        }
    }

    let commonLetters = '';

    for (let i = 0; i < matchingIds[0].length; i++) {
        if (matchingIds[0].charAt(i) === matchingIds[1].charAt(i)) {
            commonLetters += matchingIds[0].charAt(i);
        }
    }

    return commonLetters;
}