function findLongestSleepingGuard(guardScheduleString) {
    const guardScheduleArray = guardScheduleStringToArray(guardScheduleString);
    const sortedByDate = sortByDate(guardScheduleArray);
    const sortedByGuardId = sortByGuardId(sortedByDate);
    const longestSleepingGuard = getLongestAsleep(sortedByGuardId);

    const asleep = sortedByGuardId[longestSleepingGuard].minutesAsleep;
    let minuteMostFrequentlyAsleep = '';
    let daysAsleep = 0;

    for (let minute in asleep) {
        if (asleep.hasOwnProperty(minute) && asleep[minute] > daysAsleep) {
            minuteMostFrequentlyAsleep = minute;
            daysAsleep = asleep[minute];
        }
    }

    return longestSleepingGuard * minuteMostFrequentlyAsleep;
}

function findMostFrequentlyAsleepGuard(guardScheduleString) {
    const guardScheduleArray = guardScheduleStringToArray(guardScheduleString);
    const sortedByDate = sortByDate(guardScheduleArray);
    const sortedByGuardId = sortByGuardId(sortedByDate);
    let daysAsleep = 0;
    let minuteMostFrequentlyAsleep = '';
    let mostFrequentlyAsleepGuard;

    for (const guardId in sortedByGuardId) {
        if (sortedByGuardId.hasOwnProperty(guardId)) {
            const asleepTime = sortedByGuardId[guardId].minutesAsleep;

            for (const minute in asleepTime) {
                if (asleepTime.hasOwnProperty(minute) && asleepTime[minute] > daysAsleep) {
                    daysAsleep = asleepTime[minute];
                    minuteMostFrequentlyAsleep = minute;
                    mostFrequentlyAsleepGuard = guardId;
                }
            }
        }
    }

    return mostFrequentlyAsleepGuard * minuteMostFrequentlyAsleep;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function guardScheduleStringToArray(guardScheduleString) {
    return guardScheduleString.split('\n');
}

function sortByDate(unsorted) {
    return unsorted.sort((a, b) => new Date(a.substring(1, 17)) - new Date(b.substring(1, 17)));
}

function sortByGuardId(entries) {
    const result = {};
    let lastGuardId = '';
    let currentGuardId;

    entries.forEach(entry => {
        if (entry.charAt(19) === 'G') { // Contains 'Guard #...'
            currentGuardId = entry.substring(26, entry.indexOf(' begins shift', 26));

            if (!result[currentGuardId]) {
                result[currentGuardId] = {
                    shiftStart: [new Date(entry.substring(1, 17))],
                    sleepTotal: 0,
                    sleepRanges: [],
                    minutesAsleep: {}
                };
            } else {
                result[currentGuardId].shiftStart.push(new Date(entry.substring(1, 17)));
            }

            lastGuardId = currentGuardId;

        } else if (entry.charAt(19) === 'f') { // Contains 'falls asleep'
            result[currentGuardId].sleepRanges.push({start: new Date(entry.substring(1, 17)), end: undefined});

        } else { // Contains 'wakes up'
            const wokeUp = new Date(entry.substring(1, 17));
            result[lastGuardId].sleepTotal += wokeUp.getMinutes() - result[lastGuardId].sleepRanges[result[lastGuardId].sleepRanges.length - 1].start.getMinutes();

            // guards count as asleep on the minute they fall asleep, and they count as awake on the minute they wake up
            const subtractedByMinute = new Date((entry.substring(1, 16) + (Number(entry.charAt(16)) - 1)));
            result[lastGuardId].sleepRanges[result[lastGuardId].sleepRanges.length - 1].end = subtractedByMinute;

            let fellAsleep = result[lastGuardId].sleepRanges[result[lastGuardId].sleepRanges.length - 1].start.getMinutes();
            let lastSleepLength = wokeUp.getMinutes() - fellAsleep;

            for (let i = fellAsleep; i < (fellAsleep + lastSleepLength); i++) {
                i in result[lastGuardId].minutesAsleep ? result[lastGuardId].minutesAsleep[i]++ : result[lastGuardId].minutesAsleep[i] = 1;
            }
        }
    });

    return result;
}

function getLongestAsleep(scheduleByGuardId) {
    let maxSleep = 0;
    let longestSleepingGuard;

    for (let guardId in scheduleByGuardId) {
        if (scheduleByGuardId.hasOwnProperty(guardId)) {
            if (scheduleByGuardId[guardId].sleepTotal > maxSleep) {
                maxSleep = scheduleByGuardId[guardId].sleepTotal;
                longestSleepingGuard = guardId;
            }
        }
    }

    return longestSleepingGuard;
}