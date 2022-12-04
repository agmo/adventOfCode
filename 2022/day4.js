function findFullyContainedSectionAssignments(sectionAssignments) {
  let result = 0;

  sectionAssignments.forEach(elfPair => {
    if (isFullyContained(elfPair)) {
      result++;
    }
  });

  return result;

  // Checks for overlapping, specifically whether one range is FULLY contained in the other.
  function isFullyContained(rangePair) {
    // Sort so that the first range is the one that starts with a lower value or is the longer one.
    rangePair.sort((a, b) => {
      if (a[0] === b[0]) {
        const firstRangeLength = a[1] - a[0];
        const secondRangeLength = b[1] - b[0];

        return secondRangeLength - firstRangeLength;
      }

      return a[0] - b[0];
    });

    const firstElfSectionStart = rangePair[0][0];
    const firstElfSectionEnd = rangePair[0][1];
    const secondElfSectionStart = rangePair[1][0];
    const secondElfSectionEnd = rangePair[1][1];

    return secondElfSectionStart >= firstElfSectionStart && secondElfSectionEnd <= firstElfSectionEnd;
  }
}
