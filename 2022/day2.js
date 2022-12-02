const scores = {
  'X': 1,
  'Y': 2,
  'Z': 3
}; // 1 for Rock (X), 2 for Paper (Y), and 3 for Scissors (Z)

function calculateTotalScore(strategy) {
  return strategy.reduce((accumulator, current) => {
    return accumulator + getRoundScore(current);
  }, 0);
}

function getRoundScore(input) {
  // 0 if you lost, 3 if the round was a draw, and 6 if you won
  let score = scores[input[1]];

  if (endedInLoss(input)) {
    score += 0;
  } else if (endedInDraw(input)) {
    score += 3;
  } else {
    score += 6;
  }

  return score;
}

function endedInDraw(input) {
  // If both players choose the same shape, the round instead ends in a draw.
  // A for Rock, B for Paper, and C for Scissors
  // X for Rock, Y for Paper, and Z for Scissors

  return input[0] === 'A' && input[1] === 'X' ||
    input[0] === 'B' && input[1] === 'Y' ||
    input[0] === 'C' && input[1] === 'Z';
}

function endedInLoss(input) {
  return input[0] === 'A' && input[1] === 'Z' ||
    input[0] === 'B' && input[1] === 'X' ||
    input[0] === 'C' && input[1] === 'Y';
}
