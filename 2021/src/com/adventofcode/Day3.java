package com.adventofcode;

import java.util.ArrayList;
import java.util.List;

public class Day3 {
    public static int calculatePart1(List<String> puzzleInput) {
        int[][] bitCounts = initializeBitCounts(puzzleInput.get(0).length());

        for (String binaryString : puzzleInput) {
            for (int i = 0; i < binaryString.length(); i++) {
                if (binaryString.charAt(i) == '0') {
                    bitCounts[i][0]++;
                } else {
                    bitCounts[i][1]++;
                }
            }
        }

        StringBuilder gammaRateSB = new StringBuilder();
        StringBuilder epsilonRateSB = new StringBuilder();

        for (int[] bitCount : bitCounts) {
            int zeros = bitCount[0];
            int ones = bitCount[1];
            if (zeros > ones) {
                gammaRateSB.append(0);
                epsilonRateSB.append(1);
            } else {
                gammaRateSB.append(1);
                epsilonRateSB.append(0);
            }
        }

        String gammaRate = gammaRateSB.toString();
        String epsilonRate = epsilonRateSB.toString();
        // Convert binary strings to decimals
        int gammaRateDecimal = Integer.parseInt(gammaRate, 2);
        int epsilonRateDecimal = Integer.parseInt(epsilonRate, 2);

        return gammaRateDecimal * epsilonRateDecimal;
    }

    public static int calculatePart2(List<String> puzzleInput) {
        // Pass in cloned lists
        int oxygenGeneratorRating = Integer.parseInt(determineOxygenGeneratorRating(new ArrayList<>(puzzleInput), 0), 2);
        int co2scrubberRating = Integer.parseInt(determineCO2scrubberRating(new ArrayList<>(puzzleInput), 0), 2);

        return oxygenGeneratorRating * co2scrubberRating;
    }

    private static int[][] initializeBitCounts(int size) {
        int[][] result = new int[size][2];

        for (int i = 0; i < size; i++) {
            result[i][0] = 0; // Count zeros.
            result[i][1] = 0; // Count ones.
        }

        return result;
    }

    // recursively
    private static String determineOxygenGeneratorRating(List<String> input, int position) {
        int zeros = 0;
        int ones = 0;

        for (String binaryString : input) {
            if (binaryString.charAt(position) == '0') {
                zeros++;
            } else {
                ones++;
            }
        }

        int finalZeros = zeros;
        int finalOnes = ones;
        int finalCounter = position;
        input.removeIf(binaryString -> {
            if (finalZeros > finalOnes) {
                return binaryString.charAt(finalCounter) == '1';
            } else {
                return binaryString.charAt(finalCounter) == '0';
            }

        });

        if (input.size() == 1) {
            return input.get(0);
        }

        return determineOxygenGeneratorRating(input, ++position);
    }

    private static String determineCO2scrubberRating(List<String> input, int position) {
        int zeros = 0;
        int ones = 0;

        for (String binaryString : input) {
            if (binaryString.charAt(position) == '0') {
                zeros++;
            } else {
                ones++;
            }
        }

        int finalZeros = zeros;
        int finalOnes = ones;
        int finalCounter = position;
        input.removeIf(binaryString -> {
            if (finalZeros > finalOnes) {
                return binaryString.charAt(finalCounter) == '0';
            } else {
                return binaryString.charAt(finalCounter) == '1';
            }

        });

        if (input.size() == 1) {
            return input.get(0);
        }

        return determineCO2scrubberRating(input, ++position);
    }
}
