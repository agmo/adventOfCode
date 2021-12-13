package com.adventofcode;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class Day13 {
    public static int calculateDay13(List<String> puzzleInput, int puzzlePart) {
        Set<Coords> dots = new HashSet<>();
        List<String> instructions = new ArrayList<>();
        int dotsEndIndex = 0;

        for (int i = 0; i < puzzleInput.size(); i++) {
            if (puzzleInput.get(i).isEmpty()) {
                dotsEndIndex = i;
                break;
            }

            var split = puzzleInput.get(i).split(",");
            int x = Integer.parseInt(split[0]);
            int y = Integer.parseInt(split[1]);

            dots.add(new Coords(x, y));
        }

        for (int i = dotsEndIndex + 1; i < puzzleInput.size(); i++) {
            instructions.add(puzzleInput.get(i).split("fold along ")[1]);
        }

        if (puzzlePart == 1) {
            var firstInstruction = instructions.get(0).split("=");

            if (firstInstruction[0].equals("y")) {
                foldH(dots, Integer.parseInt(firstInstruction[1]));
            } else {
                foldV(dots, Integer.parseInt(firstInstruction[1]));
            }
        } else {
            for (var instruction : instructions) {
                var split = instruction.split("=");

                if (split[0].equals("y")) {
                    foldH(dots, Integer.parseInt(split[1]));
                } else {
                    foldV(dots, Integer.parseInt(split[1]));
                }
            }

            printDots(dots, 38, 5);
        }

        return dots.size();
    }

    private static void foldH(Set<Coords> dots, int foldAt) {
        var dotsBeyondFold = dots.stream()
                .filter(dot -> dot.getY() > foldAt)
                .collect(Collectors.toSet());

        var dotsToAdd = dotsBeyondFold.stream()
                .map(dot -> new Coords(dot.getX(), foldAt * 2 - dot.getY()))
                .collect(Collectors.toSet());

        dots.addAll(dotsToAdd);
        dots.removeAll(dotsBeyondFold);
    }

    private static void foldV(Set<Coords> dots, int foldAt) {
        var dotsBeyondFold = dots.stream()
                .filter(dot -> dot.getX() > foldAt)
                .collect(Collectors.toSet());

        var dotsToAdd = dotsBeyondFold.stream()
                .map(dot -> new Coords(foldAt * 2 - dot.getX(), dot.getY()))
                .collect(Collectors.toSet());

        dots.addAll(dotsToAdd);
        dots.removeAll(dotsBeyondFold);
    }

    private static void printDots(Set<Coords> dots, int sizeH, int sizeV) {
        for (int i = 0, y = 0; i <= sizeV; i++, y++) {
            System.out.println();

            for (int x = 0; x <= sizeH; x++) {
                var coords = new Coords(x, y);

                if (dots.contains(coords)) {
                    System.out.print("#");
                } else {
                    System.out.print(".");
                }
            }
        }
    }
}
