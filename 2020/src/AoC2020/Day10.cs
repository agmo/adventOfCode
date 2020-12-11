using System;
using System.Collections.Generic;
using System.Linq;

namespace AoC2020
{
    public static class Day10
    {
        public static int CalculatePart1(List<string> joltages)
        {
            var convertedJoltages = joltages.Select(x => int.Parse(x)).ToList();
            convertedJoltages.Sort();
            var initialRating = 0;
            convertedJoltages.Insert(0, initialRating);
            var oneJoltDiffCount = 0;
            var threeJoltDiffCount = 1;

            for (int i = 1; i < convertedJoltages.Count; i++)
            {
                if (convertedJoltages[i] - convertedJoltages[i - 1] == 1)
                {
                    oneJoltDiffCount += 1;
                }

                if (convertedJoltages[i] - convertedJoltages[i - 1] == 3)
                {
                    threeJoltDiffCount += 1;
                }
            }

            return oneJoltDiffCount * threeJoltDiffCount;
        }

        public static int CalculatePart2(List<string> joltages)
        {
            // TODO
            return -1;
        }
    }
}
