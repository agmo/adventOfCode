using System;
using System.Collections.Generic;
using System.Linq;
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
                result += Calculate(EvaluateExprInParens(expression, 1));
            }

            return result;
        }

        public static long CalculatePart2(List<string> expressions)
        {
            long result = 0;

            foreach (var expression in expressions)
            {
                result += Calculate2(EvaluateExprInParens(expression, 2));
            }

            return result;
        }

        private static string EvaluateExprInParens(string input, int part)
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
            long evaluatedExpression = 0;

            if (part == 1)
            {
                evaluatedExpression = Calculate(matchedString.Substring(1, matchedString.Length - 2));
            }
            else if (part == 2)
            {
                evaluatedExpression = Calculate2(matchedString.Substring(1, matchedString.Length - 2));
            }

            result = regex.Replace(input, evaluatedExpression.ToString(), 1);

            return EvaluateExprInParens(result, part);
        }

        private static long Calculate(string input)
        {
            long result = 0;
            var subs = input.Split();

            for (int i = 0; i < subs.Length;)
            {
                switch (subs[i])
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

        private static long Calculate2(string input)
        {
            if (!input.Contains('+') && !input.Contains('*'))
            {
                return long.Parse(input);
            }

            var additionPattern = @"(\d+\s+\+\s+\d+)";
            var regex = new Regex(additionPattern);
            var match = regex.Match(input);

            if (!match.Success)
            {
                var factors = input.Split(new [] {' ', '*'}, StringSplitOptions.RemoveEmptyEntries).Select(x => long.Parse(x)).ToArray();
                long product = 1;

                foreach (var factor in factors)
                {
                    product *= factor;
                }

                return product;
            }

            var matchedString = match.Groups[0].Value;
            var evaluatedExpression = Add(matchedString);

            return Calculate2(regex.Replace(input, evaluatedExpression.ToString(), 1));
        }

        private static long Add(string input)
        {
            var addends = input.Split(new char[] {' ', '+'}, StringSplitOptions.RemoveEmptyEntries).Select(x => long.Parse(x)).ToArray();
            long sum = 0;

            foreach (var addend in addends)
            {
                sum += addend;
            }

            return sum;
        }
    }
}