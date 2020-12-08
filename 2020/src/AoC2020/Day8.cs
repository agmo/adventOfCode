using System;
using System.Collections.Generic;

namespace AoC2020
{
    public static class Day8
    {
        public static int CalculatePart1(List<string> bootCode)
        {
            var accumulator = 0;
            var visitedIndexes = new List<int>();
            var currentIndex = 0;

            while (!visitedIndexes.Exists(item => item == currentIndex))
            {
                visitedIndexes.Add(currentIndex);
                var currentInstruction = bootCode[currentIndex];
                var operation = currentInstruction.Substring(0, 3);
                var argumentType = currentInstruction.Substring(4, 1);
                var argumentValue = int.Parse(currentInstruction.Substring(5));

                switch (operation)
                {
                    case "acc":
                        if (argumentType.Equals("+"))
                        {
                            accumulator += argumentValue;
                        }
                        else
                        {
                            accumulator -= argumentValue;
                        }

                        currentIndex += 1;
                        break;

                    case "jmp":
                        if (argumentType.Equals("+"))
                        {
                            currentIndex += argumentValue;
                        }
                        else
                        {
                            currentIndex -= argumentValue;
                        }
                        break;

                    case "nop":
                        currentIndex += 1;
                        break;
                }
            }

            return accumulator;
        }

        public static int CalculatePart2(List<string> bootCode)
        {
            var accumulator = 0;
            var visitedIndexes = new List<int>();
            var currentIndex = 0;

            while (currentIndex < bootCode.Count)
            {
                visitedIndexes.Add(currentIndex);
                var currentInstruction = bootCode[currentIndex];
                var operation = currentInstruction.Substring(0, 3);
                var argumentType = currentInstruction.Substring(4, 1);
                var argumentValue = int.Parse(currentInstruction.Substring(5));

                switch (operation)
                {
                    case "acc":
                        if (argumentType.Equals("+"))
                        {
                            accumulator += argumentValue;
                        }
                        else
                        {
                            accumulator -= argumentValue;
                        }

                        currentIndex += 1;
                        break;

                    case "jmp":
                        var bootCodeCopyWithNop = new List<string>(bootCode);
                        bootCodeCopyWithNop[currentIndex] = "nop" + bootCode[currentIndex].Substring(3);

                        if (!CodeLoops(bootCodeCopyWithNop))
                        {
                            currentIndex += 1;
                        }
                        else
                        {
                            if (argumentType.Equals("+"))
                            {
                                currentIndex += argumentValue;
                            }
                            else
                            {
                                currentIndex -= argumentValue;
                            }
                        }
                        break;

                    case "nop":
                        var bootCodeCopyWithJmp = new List<string>(bootCode);
                        bootCodeCopyWithJmp[currentIndex] = "jmp" + bootCode[currentIndex].Substring(3);

                        if (!CodeLoops(bootCodeCopyWithJmp))
                        {
                            if (argumentType.Equals("+"))
                            {
                                currentIndex += argumentValue;
                            }
                            else
                            {
                                currentIndex -= argumentValue;
                            }
                        }
                        else
                        {


                            currentIndex += 1;
                        }
                        break;
                }
            }

            return accumulator;
        }

        private static bool CodeLoops(List<string> bootCode)
        {
            var visitedIndexes = new List<int>();
            var currentIndex = 0;

            while (!visitedIndexes.Exists(item => item == currentIndex) && currentIndex < bootCode.Count)
            {
                visitedIndexes.Add(currentIndex);
                var currentInstruction = bootCode[currentIndex];
                var operation = currentInstruction.Substring(0, 3);
                var argumentType = currentInstruction.Substring(4, 1);
                var argumentValue = int.Parse(currentInstruction.Substring(5));

                switch (operation)
                {
                    case "acc":
                        currentIndex += 1;
                        break;

                    case "jmp":
                        if (argumentType.Equals("+"))
                        {
                            currentIndex += argumentValue;
                        }
                        else
                        {
                            currentIndex -= argumentValue;
                        }
                        break;

                    case "nop":
                        currentIndex += 1;
                        break;
                }
            }

            return currentIndex != bootCode.Count;
        }
    }
}