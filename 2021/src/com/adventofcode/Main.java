package com.adventofcode;

import java.util.List;

public class Main {

    public static void main(String[] args) {
//        List<String> day1Input = AoCHelper.getPuzzleInput(1);
//        assert day1Input != null;
//        System.out.println(Day1.calculatePart1(day1Input)); // example 7; 1298
//        System.out.println(Day1.calculatePart2(day1Input)); // example 5; 1248

         List<String> day2Input = AoCHelper.getPuzzleInput(2);
        assert day2Input != null;
        System.out.println(Day2.calculatePart1(day2Input)); // example 150; 2019945
        System.out.println(Day2.calculatePart2(day2Input)); // example 900; 1599311480
    }
}
