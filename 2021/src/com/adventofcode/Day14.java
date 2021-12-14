package com.adventofcode;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class Day14 {
    public static long calculatePart1(List<String> puzzleInput) {
        var polymerTemplate = puzzleInput.get(0);
        Map<String, String> pairInsertionRules = new HashMap<>();

        for (int i = 2; i < puzzleInput.size(); i++) {
            pairInsertionRules.put(puzzleInput.get(i).substring(0, 2), puzzleInput.get(i).substring(6, 7));
        }

        var steps = 10;
        while (steps > 0) {
            var buffer = new StringBuilder();

            for (int i = 0; i < polymerTemplate.length() - 1; i++) {
                String pair = polymerTemplate.substring(i, i + 2);

                if (pairInsertionRules.containsKey(pair)) {
                    buffer.append(polymerTemplate.charAt(i)).append(pairInsertionRules.get(pair));
                }
            }

            buffer.append(polymerTemplate.charAt(polymerTemplate.length() - 1));

            polymerTemplate = buffer.toString();
            steps--;
        }

        Map<Character, Long> letterCounts = new HashMap<>();
        for (int i = 0; i < polymerTemplate.length(); i++) {
            var currentLetter = polymerTemplate.charAt(i);

            if (letterCounts.containsKey(currentLetter)) {
                letterCounts.put(currentLetter, letterCounts.get(currentLetter) + 1);
            } else {
                letterCounts.put(currentLetter, 1L);
            }
        }

        Long mostCommon;
        Long leastCommon;

        Iterator<Map.Entry<Character, Long>> iterator = letterCounts.entrySet().iterator();
        var initial = iterator.next();
        mostCommon = initial.getValue();
        leastCommon = initial.getValue();

        while (iterator.hasNext()) {
            var currentVal = iterator.next().getValue();

            if (currentVal > mostCommon) {
                mostCommon = currentVal;
            } else if (currentVal < leastCommon) {
                leastCommon = currentVal;
            }
        }

        return mostCommon - leastCommon;
    }
}
