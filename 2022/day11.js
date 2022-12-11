function findLevelOfMonkeyBusiness(notes) {
  const rounds = 20;

  for (let i = 0; i < rounds; i++) {
    notes.forEach(note => {
      note.startingItems.forEach(item => {
        note.inspectionCount++;
        const postInspectionWorryLevel = note.operation(item);
        const worryLevelWithRelief = applyRelief(postInspectionWorryLevel);
        const monkeyToThrowTo = note.monkeyToThrowTo(worryLevelWithRelief);
        notes[monkeyToThrowTo].startingItems.push(worryLevelWithRelief);
      });
      note.startingItems = [];
    });
  }

  notes.sort((a, b) => b.inspectionCount - a.inspectionCount);

  return notes[0].inspectionCount * notes[1].inspectionCount;

  function applyRelief(worryLevel) {
    return Math.floor(worryLevel / 3);
  }
}
