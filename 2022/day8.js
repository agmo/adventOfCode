function getVisibleTreesCount(input) {
  let visibleTreeCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (i === 0 || i === input.length - 1) {
      visibleTreeCount += input[i].length;
      continue;
    }

    for (let j = 0; j < input[i].length; j++) {
      if (j === 0 || j === input.length - 1) {
        visibleTreeCount++;
        continue;
      }

      //Check left
      let isVisibleLeft = true;
      const left = input[i].slice(0, j);

      for (let k = j - 1; k >= 0; k--) {
        if (left[k] >= input[i][j]) {
          isVisibleLeft = false;
          break;
        }
      }

      if (isVisibleLeft) {
        visibleTreeCount++;
        continue;
      }

      //Check right
      let isVisibleRight = true;
      const right = input[i].slice(j + 1);

      for (let k = 0; k < right.length; k++) {
        if (right[k] >= input[i][j]) {
          isVisibleRight = false;
          break;
        }
      }

      if (isVisibleRight) {
        visibleTreeCount++;
        continue;
      }

      //Check top
      let isVisibleTop = true;
      let l = i - 1;

      while (l >= 0 && isVisibleTop) {
        if (input[l][j] >= input[i][j]) {
          isVisibleTop = false;
        }

        l--;
      }

      if (isVisibleTop) {
        visibleTreeCount++;
        continue;
      }

      //Check down
      let isVisibleDown = true;
      let m = i + 1;

      while (m < input.length && isVisibleDown) {
        if (input[m][j] >= input[i][j]) {
          isVisibleDown = false;
        }

        m++;
      }

      if (isVisibleDown) {
        visibleTreeCount++;
      }
    }
  }

  return visibleTreeCount;
}

function findHighestScenicScore(input) {
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      const currentTree = input[i][j];

      //Check left
      let viewingDistanceLeft = 0;
      const left = input[i].slice(0, j);

      for (let k = j - 1; k >= 0; k--) {
        viewingDistanceLeft++;

        if (currentTree == 0 && left[k] == 0) {
          continue;
        }

        if (left[k] >= currentTree) {
          break;
        }
      }

      //Check right
      let viewingDistanceRight = 0;
      const right = input[i].slice(j + 1);

      for (let k = 0; k < right.length; k++) {
        viewingDistanceRight++;

        if (currentTree == 0 && right[k] == 0) {
          continue;
        }

        if (right[k] >= currentTree) {
          break;
        }
      }


      //Check top
      let viewingDistanceTop = 0;
      let l = i - 1;

      while (l >= 0) {
        viewingDistanceTop++;

        if (currentTree == 0 && input[l][j] == 0) {
          l--;
          continue;
        }

        if (input[l][j] >= currentTree) {
          break;
        }

        l--;
      }

      //Check down
      let viewingDistanceDown = 0;
      let m = i + 1;

      while (m < input.length) {
        viewingDistanceDown++;

        if (currentTree == 0 && input[m][j] == 0) {
          m++;
          continue;
        }

        if (input[m][j] >= currentTree) {
          break;
        }

        m++;
      }

      result = Math.max(result, viewingDistanceLeft * viewingDistanceRight * viewingDistanceTop * viewingDistanceDown);
    }
  }

  return result;
}
