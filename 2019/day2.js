function runPrograms(programs) {
  for (let i = 0; i < programs.length;) {
    const program = programs[i];

    if (program === 1) {
      programs[programs[i + 3]] = programs[programs[i + 1]] + programs[programs[i + 2]];
      i += 4;
    } else if (program === 2) {
      programs[programs[i + 3]] = programs[programs[i + 1]] * programs[programs[i + 2]];
      i += 4;
    } else if (program === 99) {
      break;
    } else {
      console.error('Encountered an unknown opcode, something went wrong.');
      break;
    }
  }

  return programs;
}

function runPrograms_part1(programs) {
  programs[1] = 12;
  programs[2] = 2;

  return runPrograms(programs)[0];
}

function runPrograms_part2(programs) {
  let result;
  let noun;
  let verb;

  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      const clone = [...programs];
      clone[1] = i;
      clone[2] = j;

      result = runPrograms(clone)[0];

      if (result === 19690720) {
        noun = i;
        verb = j;
        break;
      }
    }
  }

  return 100 * noun + verb;
}
