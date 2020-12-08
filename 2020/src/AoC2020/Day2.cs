using System;
using System.Collections.Generic;

namespace AoC2020
{
    public static class Day2
    {
        public static int CalculatePart1(List<string> puzzleInput)
        {
            int validPswCount = 0;

            foreach (var input in puzzleInput)
            {
                if (IsPasswordValidPart1(input))
                {
                    validPswCount += 1;
                }
            }

            return validPswCount;
        }

        public static int CalculatePart2(List<string> puzzleInput)
        {
            int validPswCount = 0;

            foreach (var input in puzzleInput)
            {
                if (IsPasswordValidPart2(input))
                {
                    validPswCount += 1;
                }
            }

            return validPswCount;
        }

        private static bool IsPasswordValidPart1(string s)
        {
            char[] separators = new char[] { '-', ' ', ':' };

            string[] subs = s.Split(separators, StringSplitOptions.RemoveEmptyEntries);

            int minCharCount = int.Parse(subs[0]);
            int maxCharCount = int.Parse(subs[1]);
            char requiredChar = subs[2][0];
            string password = subs[3];
            bool isPasswordValid = false;
            int totalLettersFound = 0;

            for (int i = 0; i < password.Length; i++)
            {
                if (isPasswordValid)
                {
                    break;
                }

                if (password[i].Equals(requiredChar))
                {
                    totalLettersFound += 1;
                }

                if (totalLettersFound > maxCharCount)
                {
                    break;
                }
            }

            if (totalLettersFound >= minCharCount && totalLettersFound <= maxCharCount)
            {
                isPasswordValid = true;
            }

            return isPasswordValid;
        }

        private static bool IsPasswordValidPart2(string s)
        {
            char[] separators = new char[] { '-', ' ', ':' };

            string[] subs = s.Split(separators, StringSplitOptions.RemoveEmptyEntries);

            int position1 = int.Parse(subs[0]);
            int position2 = int.Parse(subs[1]);
            char requiredChar = subs[2][0];
            string password = subs[3];
            bool isPasswordValid = false;

            if (password[position1 - 1].Equals(requiredChar) && !password[position2 - 1].Equals(requiredChar) ||
            !password[position1 - 1].Equals(requiredChar) && password[position2 - 1].Equals(requiredChar))
            {
                isPasswordValid = true;
            }

            return isPasswordValid;
        }
    }
}