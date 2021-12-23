package com.adventofcode;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

class XYZCoords {
    private final int x;
    private final int y;
    private final int z;
    private final int hashCode;

    public XYZCoords(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.hashCode = Objects.hash(x, y, z);
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public int getZ() {
        return z;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;

        if (o == null || getClass() != o.getClass())
            return false;

        XYZCoords that = (XYZCoords) o;

        return x == that.x && y == that.y && z == that.z;
    }

    @Override
    public int hashCode() {
        return this.hashCode;
    }
}

public class Day22 {
    public static long calculatePart1(List<String> puzzleInput) {
        int size = 50;
        Map<XYZCoords, Character> cubes = new HashMap<>();

        for (int x = size * -1; x <= size; x++) {
            for (int y = size * -1; y <= size; y++) {
                for (int z = size * -1; z <= size; z++) {
                    cubes.put(new XYZCoords(x, y, z), '.');
                }
            }
        }

        for (var instruction : puzzleInput) {
            boolean on = shouldBeOn(instruction);
            int startX = getStartX(instruction);
            int endX = getEndX(instruction);
            int startY = getStartY(instruction);
            int endY = getEndY(instruction);
            int startZ = getStartZ(instruction);
            int endZ = getEndZ(instruction);

            if (
                    startX < size * -1 || endX > size ||
                            startY < size * -1 || endY > size ||
                            startZ < size * -1 || endZ > size
            ) {
                continue;
            }

            for (int x = startX; x <= endX; x++) {
                for (int y = startY; y <= endY; y++) {
                    for (int z = startZ; z <= endZ; z++) {
                        cubes.put(new XYZCoords(x, y, z), on ? '#' : '.');
                    }
                }
            }
        }

        int counter = 0;
        for (var cube : cubes.entrySet()) {
            if (cube.getValue() == '#') {
                counter++;
            }
        }

        return counter;
    }

    private static String getMatch(String text, String regex) {
        Matcher matcher = Pattern.compile(regex).matcher(text);
        String match = "";

        if (matcher.matches()) {
            match = matcher.group(1);
        }
        return match;
    }

    private static int getStartX(String instruction) {
        return Integer.parseInt(getMatch(instruction, ".*x=(-?\\d*).*"));
    }

    private static int getEndX(String instruction) {
        return Integer.parseInt(getMatch(instruction, ".*x=-?\\d*..(-?\\d*),.*"));
    }

    private static int getStartY(String instruction) {
        return Integer.parseInt(getMatch(instruction, ".*y=(-?\\d*).*"));
    }

    private static int getEndY(String instruction) {
        return Integer.parseInt(getMatch(instruction, ".*y=-?\\d*..(-?\\d*),.*"));
    }

    private static int getStartZ(String instruction) {
        return Integer.parseInt(getMatch(instruction, ".*z=(-?\\d*).*"));
    }

    private static int getEndZ(String instruction) {
        return Integer.parseInt(getMatch(instruction, ".*z=-?\\d*..(-?\\d*)"));
    }

    private static boolean shouldBeOn(String instruction) {
        return instruction.startsWith("on");
    }
}
