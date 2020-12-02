using System;
using System.Collections.Generic;

namespace AoC2020
{
    public static class Day1
    {
        public static int CalculatePart1(List<string> puzzleInput)
        {
            for (int i = 0; i < puzzleInput.Count; i++) 
            {
                for (int j = 1; j < puzzleInput.Count; j++)
                {
                    if (int.Parse(puzzleInput[i]) + int.Parse(puzzleInput[j]) == 2020)
                    {
                        return int.Parse(puzzleInput[i]) * int.Parse(puzzleInput[j]);
                    }
                }
            }

            return -1;
        }

        public static int CalculatePart2(List<string> puzzleInput)
        {
            for (int i = 0; i < puzzleInput.Count; i++) 
            {
                for (int j = 1; j < puzzleInput.Count; j++)
                {
                    for (int k = 2; k < puzzleInput.Count; k++)
                    {
                        if (int.Parse(puzzleInput[i]) + int.Parse(puzzleInput[j]) + int.Parse(puzzleInput[k]) == 2020)
                        {
                            return int.Parse(puzzleInput[i]) * int.Parse(puzzleInput[j]) * int.Parse(puzzleInput[k]);
                        }
                    }
                }
            }

            return -1;
        }
    }
}