package com.adventofcode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Day7 {
    public static int calculatePart1(List<String> puzzleInput) {
        var horizontalPositions = Arrays.stream(puzzleInput.get(0).split(",")).mapToInt(Integer::parseInt).toArray();
        int min = Arrays.stream(horizontalPositions).min().getAsInt();
        int max = Arrays.stream(horizontalPositions).max().getAsInt();
        List<Integer> fuelCosts = new ArrayList<>();

        for (int i = min; i < max; i++) {
            int fuelCost = 0;

            for (var horizontalPosition : horizontalPositions) {
                fuelCost += Math.abs(horizontalPosition - i);
            }

            fuelCosts.add(fuelCost);
        }

        return Collections.min(fuelCosts);
    }
}
