package com.adventofcode;

import java.util.*;

// Coords based on https://www.baeldung.com/java-custom-class-map-key
class Coords {
    private final int x;
    private final int y;
    private final int hashCode;

    public Coords(int x, int y) {
        this.x = x;
        this.y = y;
        this.hashCode = Objects.hash(x, y);
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;

        if (o == null || getClass() != o.getClass())
            return false;

        Coords that = (Coords) o;

        return x == that.x && y == that.y;
    }

    @Override
    public int hashCode() {
        return this.hashCode;
    }
}

public class Day5 {
    public static int calculateDay5(List<String> puzzleInput, int puzzlePart) {
        Map<Coords, Integer> diagramData = new HashMap<>();

        for (String line : puzzleInput) {
            List<Coords> coordsPairs = getCoords(line);
            Coords firstPair = coordsPairs.get(0);
            Coords secondPair = coordsPairs.get(1);

            if (firstPair.getX() == secondPair.getX() && firstPair.getY() != secondPair.getY()) { // horizontal
                int startLoop = Math.min(firstPair.getY(), secondPair.getY());
                int endLoop = Math.max(firstPair.getY(), secondPair.getY());

                for (int i = startLoop; i <= endLoop; i++) {
                    Coords toAdd = new Coords(firstPair.getX(), i);
                    diagramData.put(toAdd, diagramData.getOrDefault(toAdd, 0) + 1);
                }
            } else if (firstPair.getY() == secondPair.getY() && firstPair.getX() != firstPair.getY()) { // vertical
                int startLoop = Math.min(firstPair.getX(), secondPair.getX());
                int endLoop = Math.max(firstPair.getX(), secondPair.getX());

                for (int i = startLoop; i <= endLoop; i++) {
                    Coords toAdd = new Coords(i, firstPair.getY());
                    diagramData.put(toAdd, diagramData.getOrDefault(toAdd, 0) + 1);
                }
            } else { //diagonal
                if (puzzlePart == 2) {
                    Coords start;
                    Coords end;

                    if (firstPair.getX() < secondPair.getX()) {
                        start = firstPair;
                        end = secondPair;
                    } else {
                        start = secondPair;
                        end = firstPair;
                    }

                    int loopEnd = Math.abs(start.getY() - end.getY());

                    for (int x = start.getX(), y = start.getY(); x <= start.getX() + loopEnd; x++) {
                        Coords toAdd = new Coords(x, y);
                        diagramData.put(toAdd, diagramData.getOrDefault(toAdd, 0) + 1);

                        if (start.getY() > end.getY()) {
                            y--;
                        } else {
                            y++;
                        }
                    }
                }
            }
        }

        int multipleLineOverlapCount = 0;

        for (int lineCountAtPoint : diagramData.values()) {
            if (lineCountAtPoint > 1) {
                multipleLineOverlapCount++;
            }
        }

        return multipleLineOverlapCount;
    }

    private static List<Coords> getCoords(String lineSegment) {
        String[] ventCoords = lineSegment.split(" -> ");
        String[] ventStartCoords = ventCoords[0].split(",");
        String[] ventEndCoords = ventCoords[1].split(",");

        return Arrays.asList(
                new Coords(Integer.parseInt(ventStartCoords[0]), Integer.parseInt(ventStartCoords[1])),
                new Coords(Integer.parseInt(ventEndCoords[0]), Integer.parseInt(ventEndCoords[1]))
        );
    }
}
