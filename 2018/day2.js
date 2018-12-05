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