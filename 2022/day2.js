function calculateTotalScorePart1(strategy) {
  const scores = {
    'X': 1,
    'Y': 2,
    'Z': 3
  }; // 1 for Rock (X), 2 for Paper (Y), and 3 for Scissors (Z)

  return strategy.reduce((accumulator, current) => {
    return accumulator + getRoundScore(current);
  }, 0);

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
}

function calculateTotalScorePart2(strategy) {
  const itemValues = {
    'A': 1,
    'B': 2,
    'C': 3
  }
  const scores = {
    'X': 0,
    'Y': 3,
    'Z': 6
  };
  // X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win
  // 0 if you lost, 3 if the round was a draw, and 6 if you won

  const winningItemMap = {
    'A': 'B',
    'B': 'C',
    'C': 'A'
  }

  const losingItemMap = {
    'A': 'C',
    'B': 'A',
    'C': 'B'
  }

  return strategy.reduce((accumulator, current) => {
    return accumulator + getRoundScore(current);
  }, 0);

  function getRoundScore(input) {
    let score = scores[input[1]];

    switch (score) {
      case 0:
        score += itemValues[losingItemMap[input[0]]]
        break;
      case 3:
        score += itemValues[input[0]]
        break;
      case 6:
        score += itemValues[winningItemMap[input[0]]]
    }

    return score;
  }
}
