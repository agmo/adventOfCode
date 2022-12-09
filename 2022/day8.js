function getVisibleTreesCount(input) {
  var visibleTreeCount = 0;

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
