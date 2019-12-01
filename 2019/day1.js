function calculateSumOfFuelRequirements_part1(moduleMassValues) {
  const reducer = (accumulator, currentValue) => {
    return accumulator + (Math.floor(currentValue / 3) - 2);
  };

  return moduleMassValues.reduce(reducer, 0);
}

function calculateSumOfFuelRequirements_part2(moduleMassValues) {
  let sum = 0;

  for (let i = 0; i < moduleMassValues.length; i++) {
    sum += calculateFuel(moduleMassValues[i]);
  }

  return sum;
}

// recursive
function calculateFuel(mass) {
  let fuel = Math.floor(mass / 3) - 2;

  if (fuel <= 0) {
    return 0;
  } else {
    return fuel + calculateFuel(fuel);
  }
}
