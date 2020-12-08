using System;
using System.Collections.Generic;

namespace AoC2020
{
    public static class Day5
    {
        public static int CalculatePart1(List<string> boardingPasses)
        {
            var highestSeatId = int.MinValue;

            foreach (var boardingPass in boardingPasses)
            {
                var rowNumber = GetRowNumber(boardingPass);
                var columnNumber = GetColumnNumber(boardingPass);
                var currentSeatId = rowNumber * 8 + columnNumber;
                
                if (currentSeatId > highestSeatId)
                {
                    highestSeatId = currentSeatId;
                }
            }

            return highestSeatId;
        }

        public static int CalculatePart2(List<string> boardingPasses)
        {
            var highestSeatId = int.MinValue;
            var lowestSeatId = int.MaxValue;
            var actualSumOfIdsInRange = 0;

            foreach (var boardingPass in boardingPasses)
            {
                var rowNumber = GetRowNumber(boardingPass);
                var columnNumber = GetColumnNumber(boardingPass);
                var currentSeatId = rowNumber * 8 + columnNumber;

                if (currentSeatId > highestSeatId)
                {
                    highestSeatId = currentSeatId;
                }

                if (currentSeatId < lowestSeatId)
                {
                    lowestSeatId = currentSeatId;
                }

                actualSumOfIdsInRange += currentSeatId;
            }

            var expectedIdCountInRange = Math.Abs(highestSeatId - lowestSeatId) + 1;
            var expectedSumOfIdsInRange = ((lowestSeatId + highestSeatId) * expectedIdCountInRange) / 2;

            return expectedSumOfIdsInRange - actualSumOfIdsInRange;
        }

        private static int GetRowNumber(string boardingPass)
        {
            var rowLowerRange = 0;
            var rowUpperRange = 127;
            var rowNumber = 0;

            for (int i = 0; i < 7; i++)
            {
                if (boardingPass[i] == 'F')
                {
                    rowUpperRange -= (int)((rowUpperRange - rowLowerRange) / 2) + 1;
                }

                if (boardingPass[i] == 'B')
                {
                    rowLowerRange += (int)((rowUpperRange - rowLowerRange) / 2) + 1;
                }

                if (rowLowerRange == rowUpperRange)
                {
                    rowNumber = rowLowerRange;
                    break;
                }
            }

            return rowNumber;
        }

        private static int GetColumnNumber(string boardingPass)
        {
            var seatLowerRange = 0;
            var seatUpperRange = 7;
            var columnNumber = 0;

            for (int i = 7; i < 10; i++)
            {
                if (boardingPass[i] == 'L')
                {
                    seatUpperRange -= (int)((seatUpperRange - seatLowerRange) / 2) + 1;
                }

                if (boardingPass[i] == 'R')
                {
                    seatLowerRange += (int)((seatUpperRange - seatLowerRange) / 2) + 1;
                }

                if (seatLowerRange == seatUpperRange)
                {
                    columnNumber = seatLowerRange;
                    break;
                }
            }

            return columnNumber;
        }
    }
}