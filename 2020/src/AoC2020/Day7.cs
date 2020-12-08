using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace AoC2020
{
    public static class Day7
    {
        public static int CalculatePart1(List<string> luggageRules)
        {
            FindContainingBags(luggageRules, "shiny gold");

            return _containingBagColours.Count;
        }

        public static int CalculatePart2(List<string> luggageRules)
        {
            return CountBags(luggageRules, "shiny gold") - 1;
        }

        private static void FindContainingBags(List<string> luggageRules, string colour)
        {
            var pattern = new Regex(@"^(.*) bags contain.*(\d* " + colour + ")");

            foreach (var rule in luggageRules)
            {
                var match = pattern.Match(rule);
                var containingBagColour = match.Groups[1].Value;

                if (containingBagColour.Length > 0)
                {
                    if (!_containingBagColours.Contains(containingBagColour))
                    {
                        _containingBagColours.Add(containingBagColour);
                    }

                    FindContainingBags(luggageRules, containingBagColour);
                }
            }

            return;
        }

        private static int CountBags(List<string> luggageRules, string colour)
        {
            var bagData = GetBagsInside(luggageRules, colour); 

            if (bagData == null)
            {
                return 1;
            }

            int count = 1;
            
            foreach (var item in bagData)
            {
                count += item.Value * CountBags(luggageRules, item.Key);
            }

            return count;
        }
        private static Dictionary<string, int> GetBagsInside(List<string> luggageRules, string colour)
        {
            var bagData = new Dictionary<string, int>();
            var pattern = new Regex(@"^" + colour + " bags contain (.*)");

            foreach (var rule in luggageRules)
            {
                var bagsInside = pattern.Match(rule).Groups[1].Value.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);

                if (bagsInside.Length == 0)
                {
                    continue;
                }

                if (rule.Contains("no other bags"))
                {
                    return null;
                }

                foreach (var bag in bagsInside)
                {
                    var bagCountPattern = new Regex(@"(\d*) (.*) bags?");
                    var match = bagCountPattern.Match(bag.Trim());
                    var count = match.Groups[1].Value;
                    var bagColour = match.Groups[2].Value;
                    bagData.Add(bagColour, int.Parse(count));

                }
            }

            return bagData;
        }

        private static List<string> _containingBagColours = new List<string>();
    }
}