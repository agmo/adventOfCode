package com.adventofcode;

import java.util.*;

// https://stackoverflow.com/a/45444716
class ConsoleColors {
    // Reset
    public static final String RESET = "\033[0m";  // Text Reset

    // Regular Colors
    public static final String BLACK = "\033[0;30m";   // BLACK
    public static final String RED = "\033[0;31m";     // RED
    public static final String GREEN = "\033[0;32m";   // GREEN
    public static final String YELLOW = "\033[0;33m";  // YELLOW
    public static final String BLUE = "\033[0;34m";    // BLUE
    public static final String PURPLE = "\033[0;35m";  // PURPLE
    public static final String CYAN = "\033[0;36m";    // CYAN
    public static final String WHITE = "\033[0;37m";   // WHITE

    // Bold
    public static final String BLACK_BOLD = "\033[1;30m";  // BLACK
    public static final String RED_BOLD = "\033[1;31m";    // RED
    public static final String GREEN_BOLD = "\033[1;32m";  // GREEN
    public static final String YELLOW_BOLD = "\033[1;33m"; // YELLOW
    public static final String BLUE_BOLD = "\033[1;34m";   // BLUE
    public static final String PURPLE_BOLD = "\033[1;35m"; // PURPLE
    public static final String CYAN_BOLD = "\033[1;36m";   // CYAN
    public static final String WHITE_BOLD = "\033[1;37m";  // WHITE

    // Underline
    public static final String BLACK_UNDERLINED = "\033[4;30m";  // BLACK
    public static final String RED_UNDERLINED = "\033[4;31m";    // RED
    public static final String GREEN_UNDERLINED = "\033[4;32m";  // GREEN
    public static final String YELLOW_UNDERLINED = "\033[4;33m"; // YELLOW
    public static final String BLUE_UNDERLINED = "\033[4;34m";   // BLUE
    public static final String PURPLE_UNDERLINED = "\033[4;35m"; // PURPLE
    public static final String CYAN_UNDERLINED = "\033[4;36m";   // CYAN
    public static final String WHITE_UNDERLINED = "\033[4;37m";  // WHITE

    // Background
    public static final String BLACK_BACKGROUND = "\033[40m";  // BLACK
    public static final String RED_BACKGROUND = "\033[41m";    // RED
    public static final String GREEN_BACKGROUND = "\033[42m";  // GREEN
    public static final String YELLOW_BACKGROUND = "\033[43m"; // YELLOW
    public static final String BLUE_BACKGROUND = "\033[44m";   // BLUE
    public static final String PURPLE_BACKGROUND = "\033[45m"; // PURPLE
    public static final String CYAN_BACKGROUND = "\033[46m";   // CYAN
    public static final String WHITE_BACKGROUND = "\033[47m";  // WHITE

    // High Intensity
    public static final String BLACK_BRIGHT = "\033[0;90m";  // BLACK
    public static final String RED_BRIGHT = "\033[0;91m";    // RED
    public static final String GREEN_BRIGHT = "\033[0;92m";  // GREEN
    public static final String YELLOW_BRIGHT = "\033[0;93m"; // YELLOW
    public static final String BLUE_BRIGHT = "\033[0;94m";   // BLUE
    public static final String PURPLE_BRIGHT = "\033[0;95m"; // PURPLE
    public static final String CYAN_BRIGHT = "\033[0;96m";   // CYAN
    public static final String WHITE_BRIGHT = "\033[0;97m";  // WHITE

    // Bold High Intensity
    public static final String BLACK_BOLD_BRIGHT = "\033[1;90m"; // BLACK
    public static final String RED_BOLD_BRIGHT = "\033[1;91m";   // RED
    public static final String GREEN_BOLD_BRIGHT = "\033[1;92m"; // GREEN
    public static final String YELLOW_BOLD_BRIGHT = "\033[1;93m";// YELLOW
    public static final String BLUE_BOLD_BRIGHT = "\033[1;94m";  // BLUE
    public static final String PURPLE_BOLD_BRIGHT = "\033[1;95m";// PURPLE
    public static final String CYAN_BOLD_BRIGHT = "\033[1;96m";  // CYAN
    public static final String WHITE_BOLD_BRIGHT = "\033[1;97m"; // WHITE

    // High Intensity backgrounds
    public static final String BLACK_BACKGROUND_BRIGHT = "\033[0;100m";// BLACK
    public static final String RED_BACKGROUND_BRIGHT = "\033[0;101m";// RED
    public static final String GREEN_BACKGROUND_BRIGHT = "\033[0;102m";// GREEN
    public static final String YELLOW_BACKGROUND_BRIGHT = "\033[0;103m";// YELLOW
    public static final String BLUE_BACKGROUND_BRIGHT = "\033[0;104m";// BLUE
    public static final String PURPLE_BACKGROUND_BRIGHT = "\033[0;105m"; // PURPLE
    public static final String CYAN_BACKGROUND_BRIGHT = "\033[0;106m";  // CYAN
    public static final String WHITE_BACKGROUND_BRIGHT = "\033[0;107m";   // WHITE
}

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

    public static int calculatePart2(List<String> puzzleInput) {
        Map<Coords, Location> heightmap = convertToHeightmap(puzzleInput);
        List<Integer> basinSizes = new ArrayList<>();

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
                lowPoints.add(item.getKey());
                allBasinCoords.add(item.getKey());
                int basinSize = determineBasinSize(heightmap.get(item.getKey()), heightmap) + 1; // +1 because the lowest point also counts towards the size of the basin
                basinSizes.add(basinSize);
            }
        }

        //printResults(heightmap, puzzleInput.get(0).length() - 1, puzzleInput.size() - 1);

        basinSizes.sort(Collections.reverseOrder());

        return basinSizes.get(0) * basinSizes.get(1) * basinSizes.get(2);
    }

    private static final List<Coords> allBasinCoords = new ArrayList<>();
    private static final List<Coords> lowPoints = new ArrayList<>();

    private static void printResults(Map<Coords, Location> heightmap, int sizeH, int sizeV) {
        for (int y = sizeV; y >= 0; y--) {
            System.out.println();

            for (int x = 0; x <= sizeH; x++) {
                final int x_copy = x;
                final int y_copy = y;
                boolean allBasinCoordsContains = allBasinCoords.stream().anyMatch(o -> o.getX() == x_copy && o.getY() == y_copy);
                boolean lowPointsContains = lowPoints.stream().anyMatch(o -> o.getX() == x_copy && o.getY() == y_copy);

                if (lowPointsContains) {
                    System.out.print(ConsoleColors.RED_BOLD + heightmap.get(new Coords(x, y)).getHeight() + ConsoleColors.RESET);
                } else if (allBasinCoordsContains) {
                    System.out.print(ConsoleColors.GREEN_BOLD + heightmap.get(new Coords(x, y)).getHeight() + ConsoleColors.RESET);
                } else {
                    System.out.print(ConsoleColors.WHITE + heightmap.get(new Coords(x, y)).getHeight() + ConsoleColors.RESET);
                }
            }
        }
    }

    private static int determineBasinSize(Location item, Map<Coords, Location> heightmap) {
        List<Coords> basinCoordsList = new ArrayList<>(new HashSet<>(findBasinLocations(item, heightmap)));
        allBasinCoords.addAll(basinCoordsList);

        return basinCoordsList.size();
    }

    private static List<Coords> findBasinLocations(Location item, Map<Coords, Location> heightmap) {
        List<Coords> result = new ArrayList<>();
        var currentHeight = item.getHeight();

        for (var adjacentLocation : item.getAdjacentLocations()) {
            var adjacentLocationObject = heightmap
                    .get(new Coords(adjacentLocation.getX(), adjacentLocation.getY()));
            var adjacentLocationHeight = adjacentLocationObject
                    .getHeight();
            if (adjacentLocationHeight < 9 && adjacentLocationHeight > currentHeight) {
                result.add(adjacentLocation);
                // Concat
                result.addAll(findBasinLocations(adjacentLocationObject, heightmap));
            }
        }

        return result;
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
