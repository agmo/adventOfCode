using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace AoC2020
{
    public static class Day18
    {
        public static long CalculatePart1(List<string> expressions)
        {
            long result = 0;

            foreach (var expression in expressions)
            {
                result += Calculate(EvaluateExprInParens(expression));
            }

            return result;
        }

        private static string EvaluateExprInParens(string input)
        {
            var pattern = @"(\([^\(]+?\))"; // e.g. "(2 * 3)" or "(5 + 6)"
            var regex = new Regex(pattern);
            var match = regex.Match(input);
            string result = null;

            if (!match.Success)
            {
                return input;
            }

            var matchedString = match.Groups[0].Value;
            var evaluatedExpression = Calculate(matchedString.Substring(1, matchedString.Length - 2));

            result = regex.Replace(input, evaluatedExpression.ToString(), 1);

            return EvaluateExprInParens(result);
        }

        private static long Calculate(string input)
        {
            long result = 0;
            var subs = input.Split();

            for (int i = 0; i < subs.Length;)
            {
                switch(subs[i])
                {
                    case "*":
                    result *= long.Parse(subs[i + 1]);
                    i += 2;
                    break;

                    case "+":
                    result += long.Parse(subs[i + 1]);
                    i += 2;
                    break;

                    default:
                    result += long.Parse(subs[i]);
                    i += 1;
                    break;
                }
            }

            return result;
        }
    }
}