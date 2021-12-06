package com.adventofcode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Day6 {
    public static int calculatePart1(List<String> puzzleInput) {
        ArrayList<Integer> lanternfishAges = Arrays.stream(puzzleInput.get(0).split(","))
                .mapToInt(Integer::parseInt)
                .collect(ArrayList::new, ArrayList::add, ArrayList::addAll);
        var days = 80;
        var lastFishCount = lanternfishAges.size();

        while (days > 0) {
            for (int i = 0; i < lastFishCount; i++) {
                if (lanternfishAges.get(i) == 0) {
                    lanternfishAges.set(i, 6);
                    lanternfishAges.add(8);
                } else {
                    lanternfishAges.set(i, lanternfishAges.get(i) - 1);
                }
            }

            lastFishCount = lanternfishAges.size();
            days--;
        }

        return lastFishCount;
    }
}
