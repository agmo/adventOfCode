function runFFT_part1(input) {
  let inputAsArray = input.split('');
  const basePattern = [0, 1, 0, -1];
  let phasePattern;
  let digitCalculationOutput = [];
  let phaseResult = [];

  for (let i = 0; i < 100; i++) {
    for (let j = 1; j <= inputAsArray.length; j++) {
      phasePattern = preparePhasePattern(j);

      for (let j = 0; j < inputAsArray.length; j++) {
        const inputAsArrayElement = inputAsArray[j];
        let index = (j + 1) % phasePattern.length;

        digitCalculationOutput.push(inputAsArrayElement * phasePattern[index]);
      }

      const outputDigit = digitCalculationOutput.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      phaseResult.push(Math.abs(outputDigit % 10));
      digitCalculationOutput = [];
    }

    inputAsArray = phaseResult;
    phaseResult = [];

  }

  return inputAsArray.slice(0, 8).join('');

  //////////////////////////////////
  function preparePhasePattern(index) {
    const result = [];

    outer: for (let i = 0; i < basePattern.length; i++) {
      for (let j = 0; j < index; j++) {
        result.push(basePattern[i]);

        if (result.length > inputAsArray.length) {
          break outer;
        }
      }
    }

    return result;
  }
}
