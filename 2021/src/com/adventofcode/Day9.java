package com.adventofcode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Location {
    private final int height;
    private final List<Coords> adjacentLocations;

    public Location(int height, List<Coords> adjacentLocations) {
        this.height = height;
        this.adjacentLocations = adjacentLocations;
    }

    public int getHeight() {
        return height;
    }

    public List<Coords> getAdjacentLocations() {
        return adjacentLocations;
    }
}

public class Day9 {
    public static int calculatePart1(List<String> puzzleInput) {
        Map<Coords, Location> heightmap = convertToHeightmap(puzzleInput);
        List<Integer> lowPoints = new ArrayList<>();

        for (var item : heightmap.entrySet()) {
            var currentHeight = item.getValue().getHeight();
            var hasLowerAdjacentLocation = false;

            for (var adjacentLocation : item.getValue().getAdjacentLocations()) {
                var adjacentLocationHeight = heightmap
                        .get(new Coords(adjacentLocation.getX(), adjacentLocation.getY()))
                        .getHeight();
                if (adjacentLocationHeight <= currentHeight) {
                    hasLowerAdjacentLocation = true;
                    break;
                }
            }

            if (!hasLowerAdjacentLocation) {
                lowPoints.add(currentHeight);
            }
        }

        return calculateRiskLevel(lowPoints);
    }

    private static int calculateRiskLevel(List<Integer> lowPoints) {
        return lowPoints.stream().mapToInt(lowPoint -> lowPoint + 1).sum();
    }

    private static Map<Coords, Location> convertToHeightmap(List<String> input) {
        Map<Coords, Location> heightmap = new HashMap<>();

        for (int i = input.size() - 1, y = 0; i >= 0; i--, y++) {
            var mapSizeH = input.get(i).length();
            var mapSizeV = input.size();

            for (int x = 0; x < mapSizeH; x++) {
                var coords = new Coords(x, y);
                var height = Integer.parseInt(String.valueOf(input.get(i).charAt(x)));
                var adjacentLocations = new ArrayList<Coords>();
                if (x + 1 < mapSizeH) {
                    adjacentLocations.add(new Coords(x + 1, y));
                }

                if (x - 1 >= 0) {
                    adjacentLocations.add(new Coords(x - 1, y));
                }

                if (y - 1 >= 0) {
                    adjacentLocations.add(new Coords(x, y - 1));
                }

                if (y + 1 < mapSizeV) {
                    adjacentLocations.add(new Coords(x, y + 1));
                }

                var location = new Location(height, adjacentLocations);
                heightmap.put(coords, location);
            }
        }

        return heightmap;
    }
}
