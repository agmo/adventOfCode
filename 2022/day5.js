function findCratesOnTop(startingStacks, startingStacksIndexes, rearrangementProcedure, part) {
  const stacks = new Map();

  for (let i = startingStacks.length - 1; i >= 0; i--) {
    const line = startingStacks[i];

    for (let i = 1; i < line.length; i += 4) {
      if (line[i].trim()) {
        const currentStackIndex = startingStacksIndexes[i];
        if (!stacks.get(currentStackIndex)) {
          stacks.set(currentStackIndex, [line[i]])
        } else {
          stacks.get(currentStackIndex).push(line[i])
        }
      }
    }
  }

  rearrangementProcedure.forEach(procedure => {
    const indexOfFrom = procedure.indexOf('from');
    const cratesToMoveCount = procedure.slice(5, indexOfFrom - 1);
    const indexOfTo = procedure.indexOf('to', indexOfFrom);
    const sourceStack = procedure.slice(indexOfFrom + 5, indexOfTo - 1);
    const targetStack = procedure.slice(indexOfTo + 3);

    if (cratesToMoveCount === '1') {
      const crateToMove = stacks.get(sourceStack).pop();
      stacks.get(targetStack).push(crateToMove);
    } else {
      const from = stacks.get(sourceStack);
      const cratesToMove = from.slice(from.length - cratesToMoveCount);

      if (part === 1) {
        cratesToMove.reverse();
      }

      stacks.set(sourceStack, from.slice(0, from.length - cratesToMoveCount));
      stacks.get(targetStack).push(...cratesToMove);
    }

  });

  const topCrates = [];

  for (const value of stacks.values()) {
    topCrates.push(value.pop());
  }

  return topCrates.join('');
}
