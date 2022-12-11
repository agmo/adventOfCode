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

function renderImage(program) {
  const startingValue = 1;

  const valuesToAddQueue = new Map();
  const signalStrengths = [];
  const pixels = [];
  let spritePosition = 1;

  for (let i = 0, j = 0; i < program.length; i++, j = signalStrengths.length) {
    const queued = valuesToAddQueue.get(j);

    if (queued) {
      const currentSignalStrength = signalStrengths[j - 1] + queued
      signalStrengths[j] = spritePosition = currentSignalStrength;
      valuesToAddQueue.delete(j);


    } else {
      signalStrengths[j] = signalStrengths[j - 1] || startingValue;
    }

    if (program[i] !== 'noop') {
      const valToSet = Number.parseInt(program[i].slice(5));
      valuesToAddQueue.set(j + 2, valToSet);
      signalStrengths[j + 1] = signalStrengths[j];
    }

    for (let k = 0, pixelsLen = pixels.length; k < signalStrengths.length - pixelsLen; k++) {
      const relativeSpritePosition = Math.floor((k + pixelsLen) / 40) * 40;
      const overlapsWithSprite = Math.abs((k + pixelsLen) - (relativeSpritePosition + spritePosition)) < 2;
      if (overlapsWithSprite) {
        pixels.push('#');
      } else {
        pixels.push('.');
      }
    }
  }

  for (let i = 0; i < pixels.length; i += 40) {
    console.log(pixels.slice(i, i + 40).join(''));
  }
}
