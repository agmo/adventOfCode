using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace AoC2020
{
    public static class Day7
    {
        public static int CalculatePart1(List<string> luggageRules)
        {
            findContainingBags(luggageRules, "shiny gold");

            return containingBagColours.Count;
        }

        // public static int CalculatePart2(List<string> luggageRules)
        // {

        //     return 0;
        // }

        private static void findContainingBags(List<string> luggageRules, string colour)
        {
            foreach (var rule in luggageRules)
            {
                var pattern = new Regex(@"^(.*) bags contain.*(\d* " + colour + ")");
                var match = pattern.Match(rule);
                var containingBagColour = match.Groups[1].Value;

                if (containingBagColour.Length > 0)
                {
                    if (!containingBagColours.Contains(containingBagColour))
                    {
                        containingBagColours.Add(containingBagColour);
                    }

                    findContainingBags(luggageRules, containingBagColour);
                }
            }

            return;
        }

        private static List<string> containingBagColours = new List<string>();
    }
}