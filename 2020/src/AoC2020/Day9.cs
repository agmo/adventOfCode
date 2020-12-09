using System;
using System.Collections.Generic;

namespace AoC2020
{
    public static class Day9
    {
        public static long CalculatePart1(List<string> numberSequence)
        {
            long invalidNumber = 0;

            for (int i = _preambleLength; i < numberSequence.Count; i++)
            {
                var currentNumber = long.Parse(numberSequence[i]);

                if (!IsNumberValid(currentNumber, i, numberSequence))
                {
                    invalidNumber = currentNumber;
                    break;
                }
            }

            return invalidNumber;
        }

        public static long CalculatePart2(List<string> numberSequence)
        {
            var expectedSum = 731031916;
            long smallest = long.MaxValue;
            long largest = long.MinValue;
            var contiguousSetStart = 0;
            var contiguousSetEnd = 0;

            for (int i = 0; i < numberSequence.Count - 1; i++)
            {
                int j = i + 1;
                long sum = long.Parse(numberSequence[i]) + long.Parse(numberSequence[j]);

                while (sum < expectedSum)
                {
                    j += 1;
                    sum += long.Parse(numberSequence[j]);
                }

                if (sum == expectedSum)
                {
                    contiguousSetStart = i;
                    contiguousSetEnd = j;
                    break;
                }
            }

            for (int i = contiguousSetStart; i < contiguousSetEnd; i++)
            {
                var current = long.Parse(numberSequence[i]);

                if (current < smallest)
                {
                    smallest = current;
                }

                if (current > largest)
                {
                    largest = current;
                }
            }

            return smallest + largest;
        }

        private static bool IsNumberValid(long numberToCheck, int currentIndex, List<string> numberSequence)
        {
            var isValid = false;

            for (int i = currentIndex - _preambleLength; i < _preambleLength + currentIndex; i++)
            {
                if (isValid)
                {
                    break;
                }

                for (int j = i + 1; j < _preambleLength + currentIndex; j++)
                {
                    var number1 = long.Parse(numberSequence[i]);
                    var number2 = long.Parse(numberSequence[j]);

                    if ((number1 != number2) && (number1 + number2 == numberToCheck))
                    {
                        isValid = true;
                        break;
                    }
                }
            }
            
            return isValid;
        }

        private static readonly int _preambleLength = 25;
    }
}