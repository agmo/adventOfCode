package com.adventofcode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

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
}
