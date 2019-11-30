function countRedistributionCyclesPart1(memoryBanks) {
    let startingValue = Math.max(...memoryBanks);
    let startingIndex = memoryBanks.findIndex(val => val === startingValue);
    let reallocatedMemoryBanks = memoryBanks.slice(); //copy the original array
    let length = memoryBanks.length;
    let cycles = 0;
    let states = {};
    let foundStateSeenBefore = false;

    do {
        let blocksToRedistribute = reallocatedMemoryBanks[startingIndex];
        reallocatedMemoryBanks[startingIndex] = 0;

        startingIndex++;

        while (blocksToRedistribute) {
            startingIndex = startingIndex % length;
            reallocatedMemoryBanks[startingIndex] = reallocatedMemoryBanks[startingIndex] += 1;

            startingIndex++;
            blocksToRedistribute--;
        }

        cycles++;
        startingValue = Math.max(...reallocatedMemoryBanks);
        startingIndex = reallocatedMemoryBanks.findIndex(val => val === startingValue);

        if (!states[JSON.stringify(reallocatedMemoryBanks)]) {
            states[JSON.stringify(reallocatedMemoryBanks)] = true;
        } else {
            foundStateSeenBefore = true;
        }
    } while (!foundStateSeenBefore);

    return cycles;
}

function countRedistributionCyclesPart2(memoryBanks) {
    let startingValue = Math.max(...memoryBanks);
    let startingIndex = memoryBanks.findIndex(val => val === startingValue);
    let reallocatedMemoryBanks = memoryBanks.slice(); //copy the original array
    let length = memoryBanks.length;
    let cycles = 0;
    let states = {};
    let foundStateSeenBefore = 0;
    let stateSeenBefore;

    do {
        let blocksToRedistribute = reallocatedMemoryBanks[startingIndex];
        reallocatedMemoryBanks[startingIndex] = 0;

        startingIndex++;

        while (blocksToRedistribute) {
            startingIndex = startingIndex % length;
            reallocatedMemoryBanks[startingIndex] = reallocatedMemoryBanks[startingIndex] += 1;

            startingIndex++;
            blocksToRedistribute--;
        }

        startingValue = Math.max(...reallocatedMemoryBanks);
        startingIndex = reallocatedMemoryBanks.findIndex(val => val === startingValue);

        if (!states[JSON.stringify(reallocatedMemoryBanks)]) {
            states[JSON.stringify(reallocatedMemoryBanks)] = 1;
        } else {
            if (!foundStateSeenBefore) {
                foundStateSeenBefore = 1;
                stateSeenBefore = JSON.stringify(reallocatedMemoryBanks);
            } else {
                if (JSON.stringify(reallocatedMemoryBanks) === stateSeenBefore) {
                    foundStateSeenBefore++;
                }
                cycles++;
            }
        }
    } while (foundStateSeenBefore < 2);

    return cycles;
}


// puzzle input
// [14, 0, 15, 12, 11, 11, 3, 5, 1, 6, 8, 4, 9, 1, 8, 4]