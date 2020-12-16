using System;
using System.Collections;
using System.Collections.Generic;

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
    }
}