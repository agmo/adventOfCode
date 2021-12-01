package com.adventofcode;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class AoCHelper {
    public static List<String> getPuzzleInput(int day) {
//        var fullPath = Paths.get("puzzleInputs", String.format("day%s_example.txt", day));
        var fullPath = Paths.get("puzzleInputs", String.format("day%s.txt", day));
        var result = new ArrayList<String>();

        try {
            Scanner scanner = new Scanner(new File(fullPath.toString()));
            while (scanner.hasNextLine()) {
                result.add(scanner.nextLine());
            }
            scanner.close();

            return result;
        } catch (FileNotFoundException e) {
            e.printStackTrace();

            return null;
        }
    }
}
