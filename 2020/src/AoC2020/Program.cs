using System;
using System.Collections.Generic;

namespace AoC2020
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> day3Input;
            day3Input = AoCHelper.GetPuzzleInput(3);
            Console.WriteLine(Day3.CalculatePart1(day3Input)); // 7 (example), 240
            Console.WriteLine(Day3.CalculatePart2(day3Input)); // 336 (example), 2832009600
            
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
