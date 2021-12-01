package com.adventofcode;

import java.util.List;

public class Day1 {
    public static int calculatePart1(List<String> puzzleInput) {
        int increaseCount = 0;

        for (int i = 1; i < puzzleInput.size(); i++) {
            if (Integer.parseInt(puzzleInput.get(i)) > Integer.parseInt(puzzleInput.get(i - 1))) {
                increaseCount++;
            }
        }

        return increaseCount;
    }

    public static int calculatePart2(List<String> puzzleInput) {
        int increaseCount = 0;

        for (int i = 0; i < puzzleInput.size(); i++) {
            if (i + 3 > puzzleInput.size() - 1) {
                break;
            }

            int firstSlidingWindowSum = 0;
            for (int j = 0; j < 3; j++) {
                firstSlidingWindowSum += Integer.parseInt(puzzleInput.get(i + j));
            }

            int secondSlidingWindowSum = 0;
            for (int j = 0; j < 3; j++) {
                secondSlidingWindowSum += Integer.parseInt(puzzleInput.get(i + 1 + j));
            }

            if (secondSlidingWindowSum > firstSlidingWindowSum) {
                increaseCount++;
            }
        }

        return increaseCount;
    }
}
