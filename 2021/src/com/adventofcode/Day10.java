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

    public static Long calculatePart2(List<String> puzzleInput) {
        List<Long> completionStringsScores = new ArrayList<>();

        for (var line : puzzleInput) {
            // Stack
            Deque<Character> openingBrackets = new ArrayDeque<>();
            boolean isLineCorrupted = false;

            for (int i = 0; i < line.length(); i++) {
                Character currentBracket = line.charAt(i);

                if (isOpeningBracket(currentBracket)) {
                    openingBrackets.push(currentBracket);
                } else {
                    if (!matchesOpeningBracket(currentBracket, openingBrackets.pop())) {
                        isLineCorrupted = true;
                        break;
                    }
                }
            }

            if (!isLineCorrupted && openingBrackets.size() > 0) {
                completionStringsScores.add(getCompletionStringScore(openingBrackets));
            }
        }

        Collections.sort(completionStringsScores);

        return completionStringsScores.get(completionStringsScores.size() / 2);
    }

    private static Long getCompletionStringScore(Deque<Character> openingBrackets) {
        long score = 0;

        for (Character openingBracket : openingBrackets) {
            switch (openingBracket) {
                case '(' -> score = score * 5 + closingBracketScores.get(')');
                case '[' -> score = score * 5 + closingBracketScores.get(']');
                case '{' -> score = score * 5 + closingBracketScores.get('}');
                case '<' -> score = score * 5 + closingBracketScores.get('>');
            }
        }

        return score;
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

    private static final Map<Character, Integer> closingBracketScores = new HashMap<>(
            Map.of(
                    ')', 1,
                    ']', 2,
                    '}', 3,
                    '>', 4
            ));
}
