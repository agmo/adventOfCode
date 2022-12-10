function calculateSignalStrengths(program) {
  const startingValue = 1;

  const valuesToAddQueue = new Map();
  const signalStrengths = [];

  for (let i = 0, j = 0; i < program.length; i++, j = signalStrengths.length) {
    const queued = valuesToAddQueue.get(j);

    if (queued) {
      signalStrengths[j] = signalStrengths[j - 1] + queued;
      valuesToAddQueue.delete(j);
    } else {
      signalStrengths[j] = signalStrengths[j - 1] || startingValue;
    }

    if (program[i] !== 'noop') {
      const valToSet = Number.parseInt(program[i].slice(5));
      valuesToAddQueue.set(j + 2, valToSet);
      signalStrengths[j + 1] = signalStrengths[j];
    }
  }

  let sum = 0;

  for (let i = 19; i < 220; i += 40) {
    sum += (i + 1) * signalStrengths[i];
  }

  return sum;
}
