using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace AoC2020
{
    public struct Range
    {
        public Range(int min, int max)
        {
            Min = min;
            Max = max;
        }

        public int Min { get; set; }
        public int Max { get; set; }
    }

    public class RangeComparer : IComparer<Range>
    {
        public int Compare(Range r1, Range r2)
        {
            int primaryComparisonResult = r1.Min.CompareTo(r2.Min);

            if (primaryComparisonResult != 0)
            {
                return primaryComparisonResult;
            }

            return r1.Max.CompareTo(r2.Max);
        }
    }

    public class FieldNameMatchesComparer : IComparer<Dictionary<string, List<int>>>
    {
        public int Compare(Dictionary<string, List<int>> dict1, Dictionary<string, List<int>> dict2)
        {
            return dict1.Values.ToArray()[0].Count.CompareTo(dict2.Values.ToArray()[0].Count);
        }
    }
    public static class Day16
    {
        public static int CalculatePart1(List<string> input)
        {
            var sortedRanges = new List<Range>();
            var mergedSortedValidRanges = new Stack<Range>();

            var i = 0;
            while (!input[i].StartsWith("your ticket"))
            {
                if (!String.IsNullOrEmpty(input[i]))
                {
                    var rangeValues = input[i].Split(new string[] { ":", " or ", "-" }, StringSplitOptions.RemoveEmptyEntries);
                    var range1 = new Range(int.Parse(rangeValues[1]), int.Parse(rangeValues[2]));
                    var range2 = new Range(int.Parse(rangeValues[3]), int.Parse(rangeValues[4]));

                    sortedRanges.Add(range1);
                    sortedRanges.Add(range2);
                }

                i++;
            }

            sortedRanges.Sort(new RangeComparer());

            mergedSortedValidRanges.Push(sortedRanges[0]);

            for (int j = 1; j < sortedRanges.Count; j++)
            {
                var topRange = mergedSortedValidRanges.Peek();

                // Current range doesn't overlap so just push it onto the stack 
                if (topRange.Max < sortedRanges[j].Min - 1)
                {
                    mergedSortedValidRanges.Push(sortedRanges[j]);
                }

                // Modify existing range if it's shorter
                else if (topRange.Max < sortedRanges[j].Max)
                {
                    topRange.Max = sortedRanges[j].Max;
                    mergedSortedValidRanges.Pop();
                    mergedSortedValidRanges.Push(topRange);
                }
            }

            while (!input[i].StartsWith("nearby tickets:"))
            {
                i++;
            }

            var ascendingRanges = mergedSortedValidRanges.ToArray();
            Array.Reverse(ascendingRanges);
            var ticketScanningErrorRate = 0;
            for (int k = i + 1; k < input.Count; k++)
            {
                var ticketFields = input[k].Split(',');

                foreach (var field in ticketFields)
                {
                    int fieldAsNumber = int.Parse(field);
                    var isValid = false;

                    foreach (var range in ascendingRanges)
                    {
                        if (fieldAsNumber < range.Min)
                        {
                            isValid = false;
                            break;
                        }
                        else if (fieldAsNumber >= range.Min && fieldAsNumber <= range.Max)
                        {
                            isValid = true;
                            break;
                        }
                    }

                    if (!isValid)
                    {
                        ticketScanningErrorRate += fieldAsNumber;
                    }
                }
            }
            return ticketScanningErrorRate;
        }

        public static long CalculatePart2(List<string> input)
        {
            var sortedRanges = new List<Range>();
            var mergedSortedValidRanges = new Stack<Range>();
            var fieldNamesWithRanges = new Dictionary<string, Range[]>();

            var i = 0;
            while (!input[i].StartsWith("your ticket"))
            {
                if (!String.IsNullOrEmpty(input[i]))
                {
                    var rangeValues = input[i].Split(new string[] { ":", " or ", "-" }, StringSplitOptions.RemoveEmptyEntries);
                    var range1 = new Range(int.Parse(rangeValues[1]), int.Parse(rangeValues[2]));
                    var range2 = new Range(int.Parse(rangeValues[3]), int.Parse(rangeValues[4]));

                    sortedRanges.Add(range1);
                    sortedRanges.Add(range2);
                    fieldNamesWithRanges.Add(rangeValues[0], new Range[] { range1, range2 });
                }

                i++;
            }

            sortedRanges.Sort(new RangeComparer());

            mergedSortedValidRanges.Push(sortedRanges[0]);

            for (int j = 1; j < sortedRanges.Count; j++)
            {
                var topRange = mergedSortedValidRanges.Peek();

                if (topRange.Max < sortedRanges[j].Min - 1)
                {
                    mergedSortedValidRanges.Push(sortedRanges[j]);
                }

                else if (topRange.Max < sortedRanges[j].Max)
                {
                    topRange.Max = sortedRanges[j].Max;
                    mergedSortedValidRanges.Pop();
                    mergedSortedValidRanges.Push(topRange);
                }
            }

            var yourTicket = "";

            while (!input[i].StartsWith("nearby tickets:"))
            {
                if (input[i].StartsWith("your ticket"))
                {
                    yourTicket = input[i + 1];
                }

                i++;
            }

            var ascendingRanges = mergedSortedValidRanges.ToArray();
            Array.Reverse(ascendingRanges);
            var validNearbyTickets = new List<int[]>();

            for (int k = i + 1; k < input.Count; k++)
            {
                var ticketFieldsRow = input[k].Split(',').Select(x => int.Parse(x)).ToArray();

                var isTicketFieldsRowValid = true;
                foreach (var field in ticketFieldsRow)
                {
                    var isFieldValid = false;

                    foreach (var range in ascendingRanges)
                    {
                        if (field < range.Min)
                        {
                            isFieldValid = false;
                            break;
                        }
                        else if (field >= range.Min && field <= range.Max)
                        {
                            isFieldValid = true;
                            break;
                        }
                    }

                    if (!isFieldValid)
                    {
                        isTicketFieldsRowValid = false;
                        break;
                    }
                }

                if (isTicketFieldsRowValid)
                {
                    validNearbyTickets.Add(ticketFieldsRow);
                }
            }

            var matchesForFieldNames = new List<Dictionary<string, List<int>>>();

            foreach (var fieldName in fieldNamesWithRanges)
            {
                var matchesForFieldName = new List<int>();

                for (int m = 0; m < validNearbyTickets[0].Length; m++)
                {
                    var allFitIntoCategory = false;

                    for (int n = 0; n < validNearbyTickets.Count; n++)
                    {
                        var current = validNearbyTickets[n][m];

                        if ((current >= fieldName.Value[0].Min && current <= fieldName.Value[0].Max) ||
                        (current >= fieldName.Value[1].Min && current <= fieldName.Value[1].Max))
                        {
                            allFitIntoCategory = true;
                        }
                        else
                        {
                            allFitIntoCategory = false;
                            break;
                        }
                    }

                    if (allFitIntoCategory)
                    {
                        matchesForFieldName.Add(m);
                    }
                }

                var dict = new Dictionary<string, List<int>>();
                dict.Add(fieldName.Key, matchesForFieldName);
                matchesForFieldNames.Add(dict);
            }

            matchesForFieldNames.Sort(new FieldNameMatchesComparer());
            var orderedFieldNames = new string[fieldNamesWithRanges.Count];

            for (int o = 0; o < matchesForFieldNames.Count; o++)
            {
                var currentFieldName = matchesForFieldNames[o].Keys.ToArray()[0];
                var currentPotentialOrderValues = matchesForFieldNames[o][currentFieldName];

                if (currentPotentialOrderValues.Count == 1)
                {
                    orderedFieldNames[currentPotentialOrderValues[0]] = currentFieldName;
                    continue;
                }

                var prevFieldName = matchesForFieldNames[o - 1].Keys.ToArray()[0];
                var prevPotentialOrderValues = matchesForFieldNames[o - 1][prevFieldName];

                foreach (var currentValue in currentPotentialOrderValues)
                {
                    if (!prevPotentialOrderValues.Contains(currentValue))
                    {
                        orderedFieldNames[currentValue] = currentFieldName;
                        break;
                    }
                }
            }

            long result = 1;
            var yourTicketFields = yourTicket.Split(',');
            var departureFieldCount = 6;
            var fieldsCounted = 0;

            for (int p = 0; p < orderedFieldNames.Length; p++)
            {
                if (fieldsCounted == departureFieldCount)
                {
                    break;
                }

                if (orderedFieldNames[p].StartsWith("departure"))
                {
                    result *= int.Parse(yourTicketFields[p]);
                    fieldsCounted++;
                }
            }

            return result;
        }
    }
}