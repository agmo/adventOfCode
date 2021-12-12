package com.adventofcode;

import java.util.*;

public class Day10 {
    public static int calculatePart1(List<String> puzzleInput) {
        int syntaxErrorScore = 0;

        for (var line : puzzleInput) {
            // Stack
            Deque<Character> openingBrackets = new ArrayDeque<>();

            for (int i = 0; i < line.length(); i++) {
                Character currentBracket = line.charAt(i);

                if (isOpeningBracket(currentBracket)) {
                    openingBrackets.push(currentBracket);
                } else {
                    if (!matchesOpeningBracket(currentBracket, openingBrackets.pop())) {
                        syntaxErrorScore += syntaxErrorScores.get(currentBracket);
                        break;
                    }
                }
            }
        }

        return syntaxErrorScore;
    }

    private static boolean matchesOpeningBracket(Character currentBracket, Character lastOpeningBracket) {
        boolean isAMatch = false;

        switch (currentBracket) {
            case ')' -> isAMatch = lastOpeningBracket == '(';
            case ']' -> isAMatch = lastOpeningBracket == '[';
            case '}' -> isAMatch = lastOpeningBracket == '{';
            case '>' -> isAMatch = lastOpeningBracket == '<';
        }

        return isAMatch;
    }

    private static boolean isOpeningBracket(char toCheck) {
        return toCheck == '(' || toCheck == '[' || toCheck == '{' || toCheck == '<';
    }

    private static final Map<Character, Integer> syntaxErrorScores = new HashMap<>(
            Map.of(
                    ')', 3,
                    ']', 57,
                    '}', 1197,
                    '>', 25137
            ));
}
