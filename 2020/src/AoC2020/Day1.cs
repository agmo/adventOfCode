using System;
using System.Collections.Generic;

namespace AoC2020
{
    public static class Day1
    {
        public static int CalculatePart1(List<int> puzzleInput)
        {
            for (int i = 0; i < puzzleInput.Count; i++) 
            {
                for (int j = 1; j < puzzleInput.Count; j++)
                {
                    if (puzzleInput[i] + puzzleInput[j] == 2020)
                    {
                        return puzzleInput[i] * puzzleInput[j];
                    }
                }
            }

            return -1;
        }

        public static int CalculatePart2(List<int> puzzleInput)
        {
            for (int i = 0; i < puzzleInput.Count; i++) 
            {
                for (int j = 1; j < puzzleInput.Count; j++)
                {
                    for (int k = 2; k < puzzleInput.Count; k++)
                    {
                        if (puzzleInput[i] + puzzleInput[j] + puzzleInput[k] == 2020)
                        {
                            return puzzleInput[i] * puzzleInput[j] * puzzleInput[k];
                        }
                    }
                }
            }

            return -1;
        }
    }
}