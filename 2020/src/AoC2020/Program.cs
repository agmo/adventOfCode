﻿using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace AoC2020
{
    class Program
    {
        static void Main(string[] args)
        {
            // List<string> day22Input;
            // day22Input = AoCHelper.GetPuzzleInput(22);
            // Console.WriteLine(Day22.CalculatePart1(day22Input)); // 306 (example), 35370
            // Console.WriteLine(Day22.CalculatePart2(day22Input)); // 291 (example), 36246

            // List<string> day20Input;
            // day20Input = AoCHelper.GetPuzzleInput(20);
            // Console.WriteLine(Day20.CalculatePart1(day20Input)); // 20899048083289 (example), 16937516456219
            // Console.WriteLine(Day20.CalculatePart2(day20Input)); // 273 (example), 1858

            // List<string> day18Input;
            // day18Input = AoCHelper.GetPuzzleInput(18);
            // Console.WriteLine(Day18.CalculatePart1(new List<string>() {"1 + 2 * 3 + 4 * 5 + 6"})); // 71 (example)
            // Console.WriteLine(Day18.CalculatePart1(new List<string>() {"1 + (2 * 3) + (4 * (5 + 6))"})); // 51 (example)
            // Console.WriteLine(Day18.CalculatePart1(new List<string>() {"2 * 3 + (4 * 5)"})); // 26 (example)
            // Console.WriteLine(Day18.CalculatePart1(new List<string>() {"5 + (8 * 3 + 9 + 3 * 4 * 3)"})); // 437 (example)
            // Console.WriteLine(Day18.CalculatePart1(new List<string>() {"5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"})); // 12240 (example)
            // Console.WriteLine(Day18.CalculatePart1(new List<string>() {"((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2", "5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"})); // 13632 + 12240 (example)
            // Console.WriteLine(Day18.CalculatePart1(new List<string>() {"9 + 7 * (4 * 8 + 3 * 2 * 9 + 4) + ((6 * 8) + 3 + 7 + 7 * 8 * (9 + 5)) * 9 + ((3 * 9 * 8 * 8) + (5 + 2) + 2 * 4 * 3 + 8)"})); //  (example)
            // Console.WriteLine(Day18.CalculatePart1(day18Input)); // 26457 (example), 7293529867931
            // Console.WriteLine(Day18.CalculatePart2(new List<string>() {"1 + 2 * 3 + 4 * 5 + 6"})); // 231 (example)
            // Console.WriteLine(Day18.CalculatePart2(new List<string>() {"1 + (2 * 3) + (4 * (5 + 6))"})); // 51 (example)
            // Console.WriteLine(Day18.CalculatePart2(new List<string>() {"2 * 3 + (4 * 5)"})); // 46 (example)
            // Console.WriteLine(Day18.CalculatePart2(new List<string>() {"5 + (8 * 3 + 9 + 3 * 4 * 3)"})); // 1445 (example)
            // Console.WriteLine(Day18.CalculatePart2(new List<string>() {"5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"})); // 669060 (example)
            // Console.WriteLine(Day18.CalculatePart2(new List<string>() {"((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"})); // 23340 (example)
            // Console.WriteLine(Day18.CalculatePart2(day18Input)); // 60807587180737

            List<string> day17Input;
            day17Input = AoCHelper.GetPuzzleInput(17);
            // Console.WriteLine(Day17.CalculatePart1(day17Input)); //112 (example), 280
            Console.WriteLine(Day17.CalculatePart2(day17Input)); //848 (example), 1696 (slow!)

            // List<string> day16Input;
            // day16Input = AoCHelper.GetPuzzleInput(16);
            // Console.WriteLine(Day16.CalculatePart1(day16Input)); // 71 (example), 25916
            // Console.WriteLine(Day16.CalculatePart2(day16Input)); // 2564529489989

            // Console.WriteLine(Day15.CalculateDay15(new [] {0, 3, 6}, 2020)); // 436 (example)
            // Console.WriteLine(Day15.CalculateDay15(new [] {0, 3, 6}, 30000000)); // 175594 (example)
            // Console.WriteLine(Day15.CalculateDay15(new [] {1, 3, 2}, 2020)); // 1 (example)
            // Console.WriteLine(Day15.CalculateDay15(new [] {2, 1, 3}, 2020)); // 10 (example)
            // Console.WriteLine(Day15.CalculateDay15(new [] {1, 2, 3}, 2020)); // 27 (example)
            // Console.WriteLine(Day15.CalculateDay15(new [] {2, 3, 1}, 2020)); // 78 (example)
            // Console.WriteLine(Day15.CalculateDay15(new [] {3, 2, 1}, 2020)); // 438 (example)
            // Console.WriteLine(Day15.CalculateDay15(new [] {3, 1, 2}, 2020)); // 1836 (example)
            // Console.WriteLine(Day15.CalculateDay15(new [] {16, 11, 15, 0, 1, 7}, 2020)); // 662
            // Console.WriteLine(DateTime.Now);
            // Console.WriteLine(Day15.CalculateDay15(new [] {16, 11, 15, 0, 1, 7}, 30000000)); // 37312
            // Console.WriteLine(DateTime.Now);

            // List<string> day13Input;
            // day13Input = AoCHelper.GetPuzzleInput(13);
            // Console.WriteLine(Day13.CalculatePart1(day13Input)); // 295 (example), 2845
            // Console.WriteLine(Day13.CalculatePart2(day13Input)); // 1068781 (example), 3417 (example 2), 487905974205117

            // List<string> day12Input;
            // day12Input = AoCHelper.GetPuzzleInput(12);
            // Console.WriteLine(Day12.CalculatePart1(day12Input)); // 25 (example), 364
            // Console.WriteLine(Day12.CalculatePart2(day12Input)); // 286 (example), 39518

            // List<string> day11Input;
            // day11Input = AoCHelper.GetPuzzleInput(11);
            // Console.WriteLine(Day11.CalculatePart1(day11Input)); // 37 (example), 2346
            // Console.WriteLine(Day11.CalculatePart2(day11Input)); // 26 (example), 2111

            // List<string> day10Input;
            // day10Input = AoCHelper.GetPuzzleInput(10);
            // Console.WriteLine(Day10.CalculatePart1(day10Input)); // 35 (example 1), 220 (example 2), 1856
            // Console.WriteLine(Day10.CalculatePart2(day10Input)); // 8 (example 1), 2314037239808

            // List<string> day9Input;
            // day9Input = AoCHelper.GetPuzzleInput(9);
            // Console.WriteLine(Day9.CalculatePart1(day9Input)); // 100 (example), 731031916
            // Console.WriteLine(Day9.CalculatePart2(day9Input)); // 93396727

            // List<string> day8Input;
            // day8Input = AoCHelper.GetPuzzleInput(8);
            // Console.WriteLine(Day8.CalculatePart1(day8Input)); // 5 (example), 1684
            // Console.WriteLine(Day8.CalculatePart2(day8Input)); // 8 (example), 2188

            // List<string> day7Input;
            // day7Input = AoCHelper.GetPuzzleInput(7);
            // Console.WriteLine(Day7.CalculatePart1(day7Input)); // 4 (example), 370
            // Console.WriteLine(Day7.CalculatePart2(day7Input)); // 32 (example), 29547

            // List<string> day6Input;
            // day6Input = AoCHelper.GetPuzzleInput(6);
            // Console.WriteLine(Day6.CalculatePart1(day6Input)); // 11 (example), 7283
            // Console.WriteLine(Day6.CalculatePart2(day6Input)); // 6(example), 3520

            // List<string> day5Input;
            // day5Input = AoCHelper.GetPuzzleInput(5);
            // Console.WriteLine(Day5.CalculatePart1(day5Input)); // 820 (example), 832
            // Console.WriteLine(Day5.CalculatePart2(day5Input)); // 517

            // List<string> day4Input;
            // day4Input = AoCHelper.GetPuzzleInput(4);
            // Console.WriteLine(Day4.CalculatePart1(day4Input)); // 2 (example), 196
            // Console.WriteLine(Day4.CalculatePart2(day4Input)); // 114

            // List<string> day3Input;
            // day3Input = AoCHelper.GetPuzzleInput(3);
            // Console.WriteLine(Day3.CalculatePart1(day3Input)); // 7 (example), 240
            // Console.WriteLine(Day3.CalculatePart2(day3Input)); // 336 (example), 2832009600

            // List<string> day2Input;
            // day2Input = new List<string>() { "1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc" }; // Expected: 2, 1
            // day2Input = AoCHelper.GetPuzzleInput(2); // 439, 584
            // Console.WriteLine($"Day 2, part 1. Valid passwords: {Day2.CalculatePart1(day2Input)}");
            // Console.WriteLine($"Day 2, part 2. Valid passwords: {Day2.CalculatePart2(day2Input)}");

            // List<string> day1Input;
            // day1Input = new List<string>() {"1721", "979", "366", "299", "675", "1456"}; // Expected: 514579, 241861950
            // day1Input = AoCHelper.GetPuzzleInput(1); // // 776064, 6964490
            // var part1Result = Day1.CalculatePart1(day1Input);
            // var part2Result = Day1.CalculatePart2(day1Input);
            // Console.WriteLine($"Day 1, part 1: {part1Result}");
            // Console.WriteLine($"Day 1, part 2: {part2Result}");
        }
    }
}
