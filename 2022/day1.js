function findElfCarryingMostCalories(input) {
  let mostCalories = 0;

  input.forEach(calories => {
    let total = calories.reduce((a, b) => a + b);

    if (total > mostCalories) {
      mostCalories = total;
    }
  })

  return mostCalories;
}

function findTopThreeElvesCalorieTotal(input) {
  const calorieTotalsByElf = input.map(calories => calories.reduce((a, b) => a + b));
  calorieTotalsByElf.sort((a, b) => b - a);
  const topThree = calorieTotalsByElf.slice(0, 3);

  return topThree.reduce((a, b) => a + b);
}
