function findLevelOfMonkeyBusiness(notes, part) {
  const rounds = part === 1 ? 20 : 10000;
  const allDivisibleBy = notes.map(note => note.test).reduce((a, b) => a * b, 1);

  for (let i = 0; i < rounds; i++) {
    notes.forEach(note => {
      note.startingItems.forEach(item => {
        note.inspectionCount++;
        const postInspectionWorryLevel = note.operation(item);
        const worryLevelToThrow = part === 1 ? applyRelief(postInspectionWorryLevel) : keepWorryLevelsManageable(postInspectionWorryLevel);
        const monkeyToThrowTo = note.monkeyToThrowTo(worryLevelToThrow);
        notes[monkeyToThrowTo].startingItems.push(worryLevelToThrow);
      });
      note.startingItems = [];
    });
  }

  notes.sort((a, b) => b.inspectionCount - a.inspectionCount);

  return notes[0].inspectionCount * notes[1].inspectionCount;

  function applyRelief(worryLevel) {
    return Math.floor(worryLevel / 3);
  }

  function keepWorryLevelsManageable(worryLevel) {
    //https://en.wikipedia.org/wiki/Modular_arithmetic
    return worryLevel % allDivisibleBy;
  }
}
