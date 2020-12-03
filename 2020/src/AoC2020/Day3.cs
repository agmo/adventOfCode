using System;
using System.Collections.Generic;

namespace AoC2020
{
    public static class Day3
    {
        public static int CalculatePart1(List<string> puzzleInput)
        {
            var currentPosition = 0;
            var right = 3;
            var down = 1;
            var treeCount = 0;
            var x = 0;
            var y = 0;

            while (currentPosition < (int)(puzzleInput.Count / down) - 1)
            {
                x = (x + right) % puzzleInput[x].Length;
                y = y + down;

                if (puzzleInput[y][x] == '#')
                {
                    treeCount += 1;
                }

                currentPosition += 1;
            }

            return treeCount;
        }

        public static long CalculatePart2(List<string> puzzleInput)
        {
            long treesMultiplied = 1;
            var rightMoves = new[] { 1, 3, 5, 7, 1 };
            var downMoves = new[] { 1, 1, 1, 1, 2 };
            int right;
            int down;

            for (int i = 0; i < rightMoves.Length; i++)
            {
                var currentPosition = 0;
                var treeCount = 0;
                right = rightMoves[i];
                down = downMoves[i];
                var x = 0;
                var y = 0;

                while (currentPosition < (int)(puzzleInput.Count / down) - 1)
                {
                    x = (x + right) % puzzleInput[x].Length;
                    y = y + down;

                    if (puzzleInput[y][x] == '#')
                    {
                        treeCount += 1;
                    }

                    currentPosition += 1;
                }

                treesMultiplied *= treeCount;
            }

            return treesMultiplied;
        }
    }
}