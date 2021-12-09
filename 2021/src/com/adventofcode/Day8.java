package com.adventofcode;

import java.util.*;

public class Day8 {
    public static int calculatePart1(List<String> puzzleInput) {
        List<String[]> outputValues = new ArrayList<>();
        int uniqueDigitInstances = 0;

        for (var row : puzzleInput) {
            String[] partial = row.split(" \\| ")[1].split(" ");
            partial = Arrays.stream(partial)
                    .filter(value -> (value.length() >= 2 && value.length() <= 4) || value.length() == 7)
                    .toArray(String[]::new);
            Arrays.sort(partial, Comparator.comparing(String::length));
            outputValues.add(partial);
        }

        for (var values : outputValues) {
            uniqueDigitInstances += values.length;
        }

        return uniqueDigitInstances;
    }

    public static int calculatePart2(List<String> puzzleInput) {
        int result = 0;

        for (var row : puzzleInput) {
            String[] signalPatterns;
            String[] outputValues;

            String[] splitRow = row.split(" \\| ");
            signalPatterns = splitRow[0].split(" ");
            outputValues = splitRow[1].split(" ");

            Map<String, Integer> allDigits = decipherDigits(signalPatterns);

            StringBuilder outputValue = new StringBuilder();

            for (var value : outputValues) {
                String sortedValue = value.chars()
                        .sorted()
                        .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                        .toString();
                outputValue.append(allDigits.getOrDefault(sortedValue, 0).toString());
            }

            result += Integer.parseInt(outputValue.toString());
        }

        return result;
    }

    private static Map<String, Integer> decipherDigits(String[] input) {
        Map<String, Integer> result = new HashMap<>();

        var uniquePatterns = Arrays.stream(input)
                .filter(value -> (value.length() >= 2 && value.length() <= 4) || value.length() == 7)
                .toArray(String[]::new);
        Arrays.sort(uniquePatterns, Comparator.comparing(String::length));

        var one = uniquePatterns[0];
        String sortedOne = one.chars()
                .sorted()
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
        var seven = uniquePatterns[1];
        String sortedSeven = seven.chars()
                .sorted()
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
        var four = uniquePatterns[2];
        String sortedFour = four.chars()
                .sorted()
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
        var eight = uniquePatterns[3];
        String sortedEight = eight.chars()
                .sorted()
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
        result.put(sortedOne, 1);
        result.put(sortedSeven, 7);
        result.put(sortedFour, 4);
        result.put(sortedEight, 8);

        var fiveSegmentPatterns = Arrays.stream(input)
                .filter(value -> value.length() == 5)
                .toArray(String[]::new);

        var sixSegmentPatterns = Arrays.stream(input)
                .filter(value -> value.length() == 6)
                .toArray(String[]::new);

        for (var pattern : sixSegmentPatterns) {
            String sortedPattern = pattern.chars()
                    .sorted()
                    .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                    .toString();
            String diffWithEight = "";
            String[] eightToCompare = eight.split("");

            for (String ch: eightToCompare) {
                if (!pattern.contains(ch)) {
                    diffWithEight = ch;
                    break;
                }
            }

            if (one.contains(diffWithEight) && four.contains(diffWithEight) && seven.contains(diffWithEight)) {
                result.put(sortedPattern, 6);
                continue;
            }

            if (!one.contains(diffWithEight) && !four.contains(diffWithEight) && !seven.contains(diffWithEight)) {
                result.put(sortedPattern, 9);
                continue;
            }

            result.put(sortedPattern, 0);
        }

        for (var pattern : fiveSegmentPatterns) {
            String sortedPattern = pattern.chars()
                    .sorted()
                    .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                    .toString();
            String[] oneToCompare = one.split("");
            var commonWithOneCount = 0;

            for (String ch: oneToCompare) {
                if (pattern.contains(ch)) {
                    commonWithOneCount++;
                }
            }

            if (commonWithOneCount == 2) {
                result.put(sortedPattern, 3);
                continue;
            }


            var intersectionWithFourCount = 0;
            String[] fourToCompare = four.split("");

            for (String ch: fourToCompare) {
                if (pattern.contains(ch)) {
                    intersectionWithFourCount++;
                }
            }

            if (intersectionWithFourCount == 3) {
                result.put(sortedPattern, 5);
            } else {
                result.put(sortedPattern, 2);
            }
        }

        return result;
    }
}
