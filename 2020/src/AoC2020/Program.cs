using System;
using System.Collections.Generic;

namespace AoC2020
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> day1Input;
            // day1Input = new List<int>() {1721, 979, 366, 299, 675, 1456};
            day1Input = AoCHelper.GetPuzzleInput(1);
            var part1Result = Day1.CalculatePart1(day1Input);
            var part2Result = Day1.CalculatePart2(day1Input);
            Console.WriteLine($"Day 1, part 1: {part1Result}");
            Console.WriteLine($"Day 1, part 2: {part2Result}");
        }
    }
}
