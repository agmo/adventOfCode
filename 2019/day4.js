function isValidPassword_part1(number) {
  let hasSameAdjacentDigits = false;
  let digitsNeverDecrease = true;
  let lastDigit, lastButOneDigit;
  const maxPasswordLength = 6;

  for (let i = 0; i < (maxPasswordLength - 1); i++) {
    lastDigit = number % 10;
    number = Math.floor(number / 10);
    lastButOneDigit = number % 10;

    if (lastDigit < lastButOneDigit) {
      digitsNeverDecrease = false;
      break;
    }

    if (!hasSameAdjacentDigits && lastDigit === lastButOneDigit) {
      hasSameAdjacentDigits = true;
    }
  }

  return digitsNeverDecrease && hasSameAdjacentDigits;
}

function countValidPasswords_part1(min, max) {
  let result = 0;

  do {
    if (isValidPassword_part1(min)) {
      result++;
    }
    min++;
  } while (min <= max);

  return result;
}

function isValidPassword_part2(number) {
  let adjacentDigitCount = 0;
  let hasSameAdjacentDigits = false;
  let digitsNeverDecrease = true;
  let lastDigit, lastButOneDigit;
  const maxPasswordLength = 6;

  for (let i = 0; i < (maxPasswordLength - 1); i++) {
    lastDigit = number % 10;
    number = Math.floor(number / 10);
    lastButOneDigit = number % 10;

    if (lastDigit < lastButOneDigit) {
      digitsNeverDecrease = false;
      break;
    }

    if (lastDigit === lastButOneDigit) {
      if (!hasSameAdjacentDigits) {
        if (adjacentDigitCount === 0) {
          hasSameAdjacentDigits = true;
          adjacentDigitCount += 2;
        } else {
          adjacentDigitCount++;
        }
      } else {
        if (adjacentDigitCount === 0) {
          continue;
        } else {
          hasSameAdjacentDigits = false;
        }
      }
    }

    if (lastDigit > lastButOneDigit) {
      adjacentDigitCount = 0;
    }

  }

  return digitsNeverDecrease && hasSameAdjacentDigits;
}

function countValidPasswords_part2(min, max) {
  let result = 0;

  do {
    if (isValidPassword_part2(min)) {
      result++;
    }
    min++;
  } while (min <= max);

  return result;
}
