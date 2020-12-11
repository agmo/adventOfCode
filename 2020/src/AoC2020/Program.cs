using System;
using System.Collections.Generic;

namespace AoC2020
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> day10Input;
            day10Input = AoCHelper.GetPuzzleInput(10);
            Console.WriteLine(Day10.CalculatePart1(day10Input)); // 35 (example 1), 220 (example 2), 1856
            // Console.WriteLine(Day10.CalculatePart2(day10Input)); // 8 (example 1)
            
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
