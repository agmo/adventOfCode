const testNotes = [
  {
    startingItems: [79, 98],
    operation: worryLevel => worryLevel * 19,
    test: 23,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 23 === 0) {
        return 2;
      } else {
        return 3;
      }
    },
    inspectionCount: 0
  },
  {
    startingItems: [54, 65, 75, 74],
    operation: worryLevel => worryLevel + 6,
    test: 19,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 19 === 0) {
        return 2;
      } else {
        return 0;
      }
    },
    inspectionCount: 0
  },
  {
    startingItems: [79, 60, 97],
    operation: worryLevel => worryLevel * worryLevel,
    test: 13,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 13 === 0) {
        return 1;
      } else {
        return 3;
      }
    },
    inspectionCount: 0
  },
  {
    startingItems: [74],
    operation: worryLevel => worryLevel + 3,
    test: 17,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 17 === 0) {
        return 0;
      } else {
        return 1;
      }
    },
    inspectionCount: 0
  }
]

const notes = [
  {
    startingItems: [54, 61, 97, 63, 74],
    operation: worryLevel => worryLevel * 7,
    test: 17,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 17 === 0) {
        return 5;
      } else {
        return 3;
      }
    },
    inspectionCount: 0
  },
  {
    startingItems: [61, 70, 97, 64, 99, 83, 52, 87],
    operation: worryLevel => worryLevel + 8,
    test: 2,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 2 === 0) {
        return 7;
      } else {
        return 6;
      }
    },
    inspectionCount: 0
  },
  {
    startingItems: [60, 67, 80, 65],
    operation: worryLevel => worryLevel * 13,
    test: 5,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 5 === 0) {
        return 1;
      } else {
        return 6;
      }
    },
    inspectionCount: 0
  },
  {
    startingItems: [61, 70, 76, 69, 82, 56],
    operation: worryLevel => worryLevel + 7,
    test: 3,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 3 === 0) {
        return 5;
      } else {
        return 2;
      }
    },
    inspectionCount: 0
  },
  {
    startingItems: [79, 98],
    operation: worryLevel => worryLevel + 2,
    test: 7,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 7 === 0) {
        return 0;
      } else {
        return 3;
      }
    },
    inspectionCount: 0
  },
  {
    startingItems: [72, 79, 55],
    operation: worryLevel => worryLevel + 1,
    test: 13,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 13 === 0) {
        return 2;
      } else {
        return 1;
      }
    },
    inspectionCount: 0
  },
  {
    startingItems: [63],
    operation: worryLevel => worryLevel + 4,
    test: 19,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 19 === 0) {
        return 7;
      } else {
        return 4;
      }
    },
    inspectionCount: 0
  },
  {
    startingItems: [72, 51, 93, 63, 80, 86, 81],
    operation: worryLevel => worryLevel * worryLevel,
    test: 11,
    monkeyToThrowTo: worryLevel => {
      if (worryLevel % 11 === 0) {
        return 0;
      } else {
        return 4;
      }
    },
    inspectionCount: 0
  }
];
