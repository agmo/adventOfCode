package com.adventofcode;

import java.util.List;

public class Day2 {
    public static int calculatePart1(List<String> puzzleInput) {
        int horizontalPosition = 0;
        int depth = 0;

        for (String instruction : puzzleInput) {
            var command = instruction.split(" ");
            var type = command[0];
            var units = Integer.parseInt(command[1]);

            switch (type) {
                case "forward" -> horizontalPosition += units;
                case "up" -> depth -= units;
                case "down" -> depth += units;
            }
        }

        return horizontalPosition * depth;
    }

    public static int calculatePart2(List<String> puzzleInput) {
        int horizontalPosition = 0;
        int depth = 0;
        int aim = 0;

        for (String instruction : puzzleInput) {
            var command = instruction.split(" ");
            var type = command[0];
            var units = Integer.parseInt(command[1]);

            switch (type) {
                case "forward" -> {
                    horizontalPosition += units;
                    depth += aim * units;
                }
                case "up" -> aim -= units;
                case "down" -> aim += units;
            }
        }

        return horizontalPosition * depth;
    }
}
