package com.adventofcode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Octopus {
    private int energyLevel;
    private final List<Coords> adjacentLocations;
    private boolean flashed;

    Octopus(int energyLevel, List<Coords> adjacentLocations, boolean flashed) {
        this.energyLevel = energyLevel;
        this.adjacentLocations = adjacentLocations;
        this.flashed = flashed;
    }

    public int getEnergyLevel() {
        return energyLevel;
    }

    public List<Coords> getAdjacentLocations() {
        return adjacentLocations;
    }

    // This is used only when printing the output to the console.
    public boolean hasFlashed() {
        return flashed;
    }

    public void setFlashed(boolean hasFlashed) {
        flashed = hasFlashed;
    }

    public void setEnergyLevel(int energy) {
        energyLevel = energy;
    }
}

public class Day11 {
    public static int calculatePart1(List<String> puzzleInput) {
        int totalFlashes = 0;
        int steps = 100;
        Map<Coords, Octopus> octopusMap = convertToOctopusMap(puzzleInput);
//        printOctopusMap(octopusMap, puzzleInput.size() - 1, 0);

        for (int i = 0; i < steps; i++) {
            List<Coords> adjacentOctopusesCoords = new ArrayList<>();

            for (var octopus : octopusMap.entrySet()) {
                int currentEnergy = octopus.getValue().getEnergyLevel();
                octopus.getValue().setEnergyLevel(currentEnergy + 1);

                if (octopus.getValue().getEnergyLevel() == 10) {
                    adjacentOctopusesCoords.addAll(octopus.getValue().getAdjacentLocations());
                    octopus.getValue().setFlashed(true);
                    totalFlashes++;
                }
            }

            while (adjacentOctopusesCoords.size() > 0) {
                List<Coords> newNeighbours = new ArrayList<>();

                for (var coords : adjacentOctopusesCoords) {
                    var octopus = octopusMap.get(coords);
                    int currentEnergy = octopus.getEnergyLevel();

                    if (currentEnergy == 10) {
                        continue;
                    }

                    octopus.setEnergyLevel(currentEnergy + 1);

                    if (octopus.getEnergyLevel() == 10) {
                        newNeighbours.addAll(octopus.getAdjacentLocations());
                        octopus.setFlashed(true);
                        totalFlashes++;
                    }
                }

                adjacentOctopusesCoords.clear();
                adjacentOctopusesCoords.addAll(newNeighbours);
            }

//            printOctopusMap(octopusMap, puzzleInput.size() - 1, i + 1);

            for (var octopus : octopusMap.entrySet()) {
                octopus.getValue().setFlashed(false);

                if (octopus.getValue().getEnergyLevel() > 9) {
                    octopus.getValue().setEnergyLevel(0);
                }
            }
        }

        return totalFlashes;
    }

    private static Map<Coords, Octopus> convertToOctopusMap(List<String> input) {
        Map<Coords, Octopus> octopusMap = new HashMap<>();

        for (int i = input.size() - 1, y = 0; i >= 0; i--, y++) {
            var mapSizeH = input.get(i).length();
            var mapSizeV = input.size();

            for (int x = 0; x < mapSizeH; x++) {
                var coords = new Coords(x, y);
                var energyLevel = Integer.parseInt(String.valueOf(input.get(i).charAt(x)));
                var adjacentLocations = new ArrayList<Coords>(); //Adjacent H, V and diagonally.

                if (x + 1 < mapSizeH) {
                    adjacentLocations.add(new Coords(x + 1, y));
                    if (y - 1 >= 0) {
                        adjacentLocations.add(new Coords(x + 1, y - 1));
                    }
                }

                if (x - 1 >= 0) {
                    adjacentLocations.add(new Coords(x - 1, y));
                    if (y + 1 < mapSizeV) {
                        adjacentLocations.add(new Coords(x - 1, y + 1));
                    }
                }

                if (y - 1 >= 0) {
                    adjacentLocations.add(new Coords(x, y - 1));
                    if (x - 1 >= 0) {
                        adjacentLocations.add(new Coords(x - 1, y - 1));
                    }
                }

                if (y + 1 < mapSizeV) {
                    adjacentLocations.add(new Coords(x, y + 1));
                    if (x + 1 < mapSizeH) {
                        adjacentLocations.add(new Coords(x + 1, y + 1));
                    }
                }

                var location = new Octopus(energyLevel, adjacentLocations, false);
                octopusMap.put(coords, location);
            }
        }

        return octopusMap;
    }

    private static void printOctopusMap(Map<Coords, Octopus> octopusMap, int gridSize, int step) {
        System.out.println("After step " + step + ":");

        for (int y = gridSize; y >= 0; y--) {
            System.out.println();

            for (int x = 0; x <= gridSize; x++) {
                Octopus current = octopusMap.get(new Coords(x, y));

                if (current.hasFlashed()) {
                    System.out.print(ConsoleColors.YELLOW_BACKGROUND + "0" + ConsoleColors.RESET);
                } else {
                    System.out.print(current.getEnergyLevel());
                }
            }
        }

        System.out.println();
    }
}
